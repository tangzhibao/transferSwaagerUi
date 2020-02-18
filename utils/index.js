function judgeType(paramItem) {
  if ("type" in paramItem) return filterType(paramItem.type);
  if ("schema" in paramItem) {
    const schema = paramItem.schema;
    if ("type" in schema) return filterType(schema.type);
    if ("$ref" in schema) return "object";
  }
}

function filterType(type) {
  switch (type) {
    case "integer":
      return "number";
    default:
      return type;
  }
}

function firstWordUppderCase(str) {
  return str.replace(str[0], str[0].toUpperCase());
}

function createApiAnnotation(
  { paramsIn, type, name, description },
  data,
  action
) {
  return (function deep(obj, text = '') {
    if (type === "error") throw new Error("error type!");

    if (action === "req") {
      return 'items' in obj
        ? deep(data.items, text
          )
        : `@api${paramsIn} {${filterType(type)}} ${name} ${description}`
    }

    // if (action === "res") console.log("res:", data);

    return `
    * @api${paramsIn} {${type}} ${name} ${description}`;
  })(data);
}

function parametersParser(pathsData) {
  return Object.entries({ ...pathsData }).reduce(
    (r, [path, pathInfo]) =>
      r.concat(
        Object.entries(pathInfo).map(([method, apiDetail]) => ({
          ...apiDetail,
          method,
          path
        }))
      ),
    []
  );
}

function definitionsParser(defData = {}) {
  let result = {};
  let stack = [];
  let firstTime = true;
  stack.push([defData, result]);

  while (stack.length) {
    const [obj, tar] = stack.pop();

    for (const [k, v] of Object.entries(obj)) {
      if (firstTime) {
        tar[k] = {};
        stack.push([v["properties"], tar[k]]);
      } else {
        let param, originalRef;
        if ("type" in v && !["object", "array"].includes(v.type)) {
          param = {
            type: filterType(v.type),
            description: v.description || ""
          };
        } else {
          let continueMap = needMap(v.items || v || {});
          if (continueMap)
            originalRef =
              v.type === "array" ? v.items.originalRef : v.originalRef;
          if (originalRef === "RegionDTO") {
            continueMap = undefined;
            originalRef = undefined;
          }
          param = {
            type: filterType(v.type) || "object",
            description: v.description,
            items: continueMap
              ? {}
              : {
                  type: filterType(v.type === "array" ? v.items.type : v.type),
                  description:
                    (v.type === "array"
                      ? v.items.description
                      : v.description) || ""
                }
          };
        }
        tar[k] = param;
        if (originalRef !== undefined)
          stack.push([defData[originalRef].properties, tar[k].items]);
      }
    }
    firstTime = false; // 结束首次循环
  }
  return result;
}

function needMap(obj) {
  if ("$ref" in obj) return true;
  return false;
}

module.exports = {
  judgeType,
  filterType,
  firstWordUppderCase,
  createApiAnnotation,
  parametersParser,
  definitionsParser
};
