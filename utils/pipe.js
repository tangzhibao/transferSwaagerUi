const {
  judgeType,
  filterType,
  firstWordUppderCase,
  createApiAnnotation
} = require("./index");

const reset = Symbol("reset");

class Pipe {
  constructor(params, res, defs) {
    this.params = params;
    this.req = [...params];
    this.res = res;
    this.defs = defs;
  }

  [reset] = () => {
    this.req = [...this.params];
    return this;
  };

  findHeader = () => {
    this.req = this.req.filter(item => item["in"] === "header");
    return this;
  };

  filterHeader = () => {
    this.req = this.req.filter(item => item["in"] !== "header");
    return this;
  };

  filterFields = (filterFields = []) => {
    this.req = this.req.filter(({ name }) => !filterFields.includes(name));
    return this;
  };

  findResWithStatus = statusCode => {
    this.res = { [statusCode]: this.res[statusCode] };
    return this;
  };

  flatContent = action => {
    const data = Object.entries(this[action]).reduce((r, [k, v]) => {
      if ("schema" in v) {
        r[k] = {
          name: k,
          ...v,
          type: "object",
          items: this.defs[v.schema.originalRef]
        };
        if (!("$ref" in v.schema)) r[k].items = { ...v.schema };
        delete r[k].type;
      } else {
        r[k] = { ...v };
      }
      return r;
    }, {});
    if (action === "req") data.length = this[action].length;
    this[action] = action === "req" ? Array.from(data) : [data];
    return this;
  };

  sortPageFiled = (pageFields = []) => {
    this.req = this.req
      .sort((a, b) => (pageFields.includes(a.name) ? 1 : -1))
      .map(item => {
        switch (item.name) {
          case "pageNumber":
            return { ...item, name: "page", description: "查询页码" };
          case "pageSize":
            return { ...item, name: "size", description: "分页大小" };
          default:
            return { ...item };
        }
      });
    return this;
  };

  generate = (paramsIn = "param", action = "req") => {
    if (!["req", "res"].includes(action)) throw new Error("wrong action");

    console.log(this.res);

    // const data = this[action].reduce((r, c) => {
    //   const { name, description, required, type } = c
    //   return r + createApiAnnotation({
    //     paramsIn: firstWordUppderCase(paramsIn),
    //     type: filterType(type) || judgeType(c),
    //     name: required ? `[${name}]` : name,
    //     description,
    //   }, c, action)
    // }
    // , '')

    this[reset]();
    // return data;
  };
}

module.exports = (...props) => func => func.call(null, new Pipe(...props));
