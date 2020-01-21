/**
 * api-generator
 * @example node utils/api-generator --url apiPath --name test --dist dtos
 */

//  http://192.168.0.76:8051/swagger-ui.html?urls.primaryName=web#/%E4%B8%9A%E5%8A%A1%E5%91%98%E7%AE%A1%E7%90%86/getAllEmployeesUsingGET

const fs = require('fs');
const urlLib = require('url');
const qs = require('query-string');
const yargsParser = require('yargs-parser');
const axios = require('axios');
const utils = require('./index.js');

const matchApi = utils._matchApi; // get api detail
const judgeType = utils._judgeType; // judge type
const getDesc = utils._getDesc; // get param description
const firstWordUppderCase = utils._firstWordUppderCase; // transform first word to uppercase
const addClassText = utils._addClassText; // add class annotation
const addImportText = utils._addImportText; // add import annotation
const generatePropertyAnnotation = utils._generatePropertyAnnotation;

const argv = yargsParser(process.argv.slice(2));
const { url, name: apiName, dist, test: testModel } = argv; // command line paramerters

if (!testModel) {
  if (!url || !apiName || !dist) { throw new Error('缺少参数！'); }
}
const { host, hash, query } = urlLib.parse(
  testModel
    ? 'http://192.168.0.76:8051/swagger-ui.html?urls.primaryName=web#/%E4%B8%9A%E5%8A%A1%E5%91%98%E7%AE%A1%E7%90%86/getAllProductsUsingGET_1'
    : url,
);

// match param after the last '/' in str
const reg = /[^/]+(?!.*\/)/g;

const apiId = hash.match(reg)[0];
const group = qs.parse(query)['urls.primaryName'];
const swaagerDataUrl = `http://${host}/v2/api-docs?group=${group}`;
const testUrl = 'http://127.0.0.1:3000/mock/swagger';

axios.get((testModel ? testUrl : swaagerDataUrl), { timeout: 5000 })
  .then(res => generateApidoc(res.data))
  // tslint:disable-next-line: no-console
  .catch(error => { console.error('error:', error.message); });

function generateApidoc(swaggerData) {
  const { definitions, paths } = swaggerData;
  const apiData = matchApi(paths, apiId);

  if (!apiData) { throw new Error('数据处理错误！'); }

  // const {
  //   tags,
  //   method,
  //   summary,
  //   description,
  //   operationId,
  //   parameters,
  //   responses,
  // } = apiData;

  const paramDto = generateParamDto(apiData, definitions);
  const responseDto = generateResponseDto(apiData, definitions);

  fs.writeFileSync(`./src/${dist}/${apiName}.dto.ts`, addImportText(paramDto + responseDto));
}

/**
 * @description generate param dto from api
 * @param {object} apiData {tags,method,summary,description,operationId,parameters,responses}
 * @param {object} definitions a map of dto
 */
function generateParamDto(apiData, definitions) {
  const {
    operationId,
    parameters,
  } = apiData;
  const apiReg = /(.*)(?=Using)/g;

  const params = parameters.reduce(
    (r, c) => {
      if (
        ['sort.sorted', 'sort.unsorted', 'paged', 'unpaged', 'offset']
          .includes(c.name)
      ) { return r; }  // filter unuse pagination field

      return r + deepMapField(c, definitions)
    },
    '',
  );
  const dtoName = firstWordUppderCase(operationId.match(apiReg)[0]);
  return addClassText(dtoName, params)('Req');
}

/**
 * @description generate response dto from api
 * @param {object} apiData
 */
function generateResponseDto(apiData, definitions) {
  const {
    operationId,
    responses,
  } = apiData;
  const apiReg = /(.*)(?=Using)/g;

  const dtoName = firstWordUppderCase(operationId.match(apiReg)[0]);
  const params = deepMapField(responses['200'], definitions)

  return addClassText(dtoName, params)('Res')
}

/**
 * @description deeply map dto field
 * @param {object} schema { type: '', name: '', schema: '', required: '' }
 * @param {object} definitions dto
 */
function deepMapField(data, definitions, onOff = false) {
  const dtoReg = /[^/]+(?!.*\/)/g;

  if (data.type === 'array') return deepMapField(data.items, definitions)

  if ('schema' in data) {  // request Dto
    const schema = data.schema;
    if ('$ref' in schema) return judgeRef(schema, dtoReg, definitions);
  }

  if ('$ref' in data) return judgeRef(data, dtoReg, definitions);

  if (
    ['code', 'data', 'message', 'pagination'].includes(data) &&
    onOff === true
  ) return ''

  if (
    ['sort.sorted', 'sort.unsorted', 'paged', 'unpaged', 'offset']
      .includes(data)
  ) { return '' }  // filter unuse pagination field

  return generatePropertyAnnotation(data)
}

function judgeRef(schema, dtoReg, definitions) {
  let onOff = false;
  const dtoName = (schema.$ref.match(dtoReg) || [])[0];
  const properties = (Object.entries(definitions).filter(
    ([k]) => k === dtoName,
  ) || [[undefined, { properties: '' }]])[0][1].properties;

  if (!properties) { throw new Error('properties not found!'); }
  if ((/HttpResult/g).test(dtoName)) { onOff = true }

  return Object.entries(properties).reduce((r, [k, v]) => {
    return r + deepMapField({ ...v, name: k }, definitions, onOff);
  }, '');
}
