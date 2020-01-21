/**
 * api-generator
 * @example node utils/api-generator --env test
 */

const fs = require('fs');
const yargsParser = require('yargs-parser');
const axios = require('axios');
const config = require('./generator.json');
const createPipe = require('./pipe');
const { parametersParser, definitionsParser } = require('./index')

const argv = yargsParser(process.argv.slice(2));
const { env } = argv
if (!env) throw new Error('缺少参数！请检查命令是否包含env参数！')

let { docUrl, dataUrl, query, target: { [env]: api } } = config;
if (!api || !api.ip || !api.host) {
  throw new Error('参数错误，请检查参数或json文件！')
}

if (env === 'test') {
  dataUrl = api['data-url'] || dataUrl
  docUrl = api['doc-url'] || docUrl
  query = api.query || query
}

const url = `http://${api.ip}:${api.host}/${dataUrl}?${query}`

axios
  .get(url)
  .then(res => generateApidoc(res.data))
  .catch(error => console.error(`Error!: ${error.message}`))

function generateApidoc({
  swagger,
  info,
  host,
  basePath,
  tags,
  paths,
  definitions
}) {
  const api = parametersParser(paths)
  const defs = definitionsParser(definitions)
  
  const apidoc = api.reduce((r, {
    method,
    path,
    tags,
    summary,
    description,
    operationId,
    produces,
    parameters,
    responses,
    deprecated,
  }) => {
    const pipeFactory = createPipe(parameters, responses, defs)

    return r + `
/**
 * 
 * @api {${method}} ${path} ${summary}
 * @apiDescription ${description}
 * @apiVersion 1.1.0
 * @apiName ${operationId}
 * @apiGroup ${tags.reduce((r, c) => r + `${c} `, '')}
 * 
 * ${pipeFactory(getApiHeader)}
 * ${pipeFactory(getApiParam)}
 * 
 * ${pipeFactory(getApiSuccess)}
 * 
 */
    `
  }, '')

  fs.writeFileSync('./apidoc/document.js', apidoc)
}

function getApiHeader(paramsPipe) {
  return paramsPipe
    .findHeader()
    .generate('header')
}

function getApiParam(paramsPipe) {
  return paramsPipe
    .filterHeader()
    .filterFields(['paged', 'unpaged', 'sort.sorted', 'sort.unsorted', 'offset'])
    .sortPageFiled(['pageNumber', 'pageSize'])
    .flatContent('req')
    .generate('param')
}

function getApiSuccess(paramsPipe) {
  paramsPipe
    .findResWithStatus('200')
    .flatContent('res')
    .generate('success', 'res')
}
