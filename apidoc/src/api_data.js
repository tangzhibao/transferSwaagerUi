define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "apidoc/src/main.js",
    "group": "E:\\tangzebing\\api-doc-generator\\apidoc\\src\\main.js",
    "groupTitle": "E:\\tangzebing\\api-doc-generator\\apidoc\\src\\main.js",
    "name": ""
  },
  {
    "type": "patch",
    "url": "/api/web/employees/status",
    "title": "业务员上下架",
    "description": "<p>id和status 0下架 1上架</p>",
    "version": "1.1.0",
    "name": "changeStatusUsingPATCH",
    "group": "业务员管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderFinish",
            "description": "<p>已完成订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderOngoing",
            "description": "<p>跟踪中订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderTotal",
            "description": "<p>跟踪订单总数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region",
            "description": "<p>地区</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0下线 1上线, 新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "业务员管理"
  },
  {
    "type": "post",
    "url": "/api/web/employees",
    "title": "新增业务员",
    "description": "<p>新增业务员</p>",
    "version": "1.1.0",
    "name": "createEmployeeUsingPOST",
    "group": "业务员管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderFinish",
            "description": "<p>已完成订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderOngoing",
            "description": "<p>跟踪中订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderTotal",
            "description": "<p>跟踪订单总数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region",
            "description": "<p>地区</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0下线 1上线, 新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "业务员管理"
  },
  {
    "type": "get",
    "url": "/api/web/employees/excel",
    "title": "业务员列表-导出excel",
    "description": "<p>业务员列表-导出excel</p>",
    "version": "1.1.0",
    "name": "downloadExcelUsingGET",
    "group": "业务员管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "statusStr",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0下线 1上线, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region",
            "description": "<p>地区</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderTotal",
            "description": "<p>跟踪订单总数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderOngoing",
            "description": "<p>跟踪中订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderFinish",
            "description": "<p>已完成订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "业务员管理"
  },
  {
    "type": "get",
    "url": "/api/web/employees",
    "title": "业务员列表",
    "description": "<p>业务员列表</p>",
    "version": "1.1.0",
    "name": "getAllEmployeesUsingGET",
    "group": "业务员管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "statusStr",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0下线 1上线, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region",
            "description": "<p>地区</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderTotal",
            "description": "<p>跟踪订单总数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderOngoing",
            "description": "<p>跟踪中订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderFinish",
            "description": "<p>已完成订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "业务员管理"
  },
  {
    "type": "get",
    "url": "/api/web/employees/{id}",
    "title": "通过id业务员",
    "description": "<p>通过id业务员</p>",
    "version": "1.1.0",
    "name": "getEmployeeUsingGET",
    "group": "业务员管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "业务员管理"
  },
  {
    "type": "put",
    "url": "/api/web/employees",
    "title": "更新业务员",
    "description": "<p>更新业务员</p>",
    "version": "1.1.0",
    "name": "updateEmployeeUsingPUT",
    "group": "业务员管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderFinish",
            "description": "<p>已完成订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderOngoing",
            "description": "<p>跟踪中订单, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderTotal",
            "description": "<p>跟踪订单总数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region",
            "description": "<p>地区</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0下线 1上线, 新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "业务员管理"
  },
  {
    "type": "post",
    "url": "/api/web/orders/pay/test-contract",
    "title": "测试合同接口",
    "description": "<p>测试合同接口</p>",
    "version": "1.1.0",
    "name": "testContractUsingPOST",
    "group": "云合同测试",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "signFile",
            "description": "<p>signFile</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "云合同测试"
  },
  {
    "type": "post",
    "url": "/api/web/orders/pay/test-real",
    "title": "测试实名验证",
    "description": "<p>测试实名验证</p>",
    "version": "1.1.0",
    "name": "testRealNameUsingPOST",
    "group": "云合同测试",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "云合同测试"
  },
  {
    "type": "post",
    "url": "/api/web/orders/pay/upload-seal",
    "title": "上传自定义印章",
    "description": "<p>上传自定义印章</p>",
    "version": "1.1.0",
    "name": "uploadSealUsingPOST",
    "group": "云合同测试",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "signFile",
            "description": "<p>signFile</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "云合同测试"
  },
  {
    "type": "patch",
    "url": "/api/web/products/product-pics/sequence",
    "title": "商品图片排序",
    "description": "<p>传id1, id2</p>",
    "version": "1.1.0",
    "name": "changePicSequenceUsingPATCH",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "additionalProperties",
            "description": "<p>undefined</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "商品"
  },
  {
    "type": "patch",
    "url": "/api/web/products/sequence",
    "title": "商品排序",
    "description": "<p>传id1, id2</p>",
    "version": "1.1.0",
    "name": "changeSequenceUsingPATCH_1",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "additionalProperties",
            "description": "<p>undefined</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "商品"
  },
  {
    "type": "patch",
    "url": "/api/web/products/status",
    "title": "商品上下架",
    "description": "<p>id和status 0下架 1上架</p>",
    "version": "1.1.0",
    "name": "changeStatusUsingPATCH_1",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>服务说明</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "feature",
            "description": "<p>产品特色</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>主图</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>套餐详情</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastModifiedDate",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "productPics",
            "description": "<p>图片数组</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "qidai",
            "description": "<p>脐带</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sort",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0:下架 1:上架 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "storeYear",
            "description": "<p>储存年限</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "taiPai",
            "description": "<p>胎盘</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "yangMo",
            "description": "<p>羊膜</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "商品"
  },
  {
    "type": "post",
    "url": "/api/web/products",
    "title": "创建商品",
    "description": "<p>创建商品</p>",
    "version": "1.1.0",
    "name": "createProductUsingPOST",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>服务说明</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "feature",
            "description": "<p>产品特色</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>主图</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>套餐详情</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastModifiedDate",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "productPics",
            "description": "<p>图片数组</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "qidai",
            "description": "<p>脐带</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sort",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0:下架 1:上架 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "storeYear",
            "description": "<p>储存年限</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "taiPai",
            "description": "<p>胎盘</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "yangMo",
            "description": "<p>羊膜</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "商品"
  },
  {
    "type": "get",
    "url": "/api/web/products",
    "title": "商品列表",
    "description": "<p>商品列表</p>",
    "version": "1.1.0",
    "name": "getAllProductsUsingGET_1",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "yangMo",
            "description": "<p>羊膜</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "taiPai",
            "description": "<p>胎盘</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "storeYear",
            "description": "<p>储存年限</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0:下架 1:上架 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sort",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "qidai",
            "description": "<p>脐带</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPics[0]",
            "description": "<p>.url 图片链接</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastModifiedDate",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>套餐详情</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>主图</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "feature",
            "description": "<p>产品特色</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>服务说明</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "商品"
  },
  {
    "type": "get",
    "url": "/api/web/products/{id}",
    "title": "根据id获取商品",
    "description": "<p>根据id获取商品</p>",
    "version": "1.1.0",
    "name": "getProductUsingGET_1",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "商品"
  },
  {
    "type": "put",
    "url": "/api/web/products",
    "title": "更新商品",
    "description": "<p>更新商品</p>",
    "version": "1.1.0",
    "name": "updateProductUsingPUT",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>服务说明</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "feature",
            "description": "<p>产品特色</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>主图</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>套餐详情</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastModifiedDate",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "productPics",
            "description": "<p>图片数组</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "qidai",
            "description": "<p>脐带</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sort",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0:下架 1:上架 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "storeYear",
            "description": "<p>储存年限</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "taiPai",
            "description": "<p>胎盘</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "yangMo",
            "description": "<p>羊膜</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "商品"
  },
  {
    "type": "patch",
    "url": "/api/web/navigations/sequence",
    "title": "排序",
    "description": "<p>传id1, id2</p>",
    "version": "1.1.0",
    "name": "changeSequenceUsingPATCH",
    "group": "导航",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "additionalProperties",
            "description": "<p>undefined</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "导航"
  },
  {
    "type": "post",
    "url": "/api/web/navigations",
    "title": "新增导航",
    "description": "<p>新增导航</p>",
    "version": "1.1.0",
    "name": "createNavigationUsingPOST",
    "group": "导航",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "iconOnClick",
            "description": "<p>点击icon</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "iconUnClick",
            "description": "<p>未点击icon</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sort",
            "description": "<p>新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "导航"
  },
  {
    "type": "delete",
    "url": "/api/web/navigations/{id}",
    "title": "根据id删除导航",
    "description": "<p>根据id删除导航</p>",
    "version": "1.1.0",
    "name": "deleteNavigationUsingDELETE",
    "group": "导航",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "导航"
  },
  {
    "type": "get",
    "url": "/api/web/navigations",
    "title": "导航列表",
    "description": "<p>导航列表</p>",
    "version": "1.1.0",
    "name": "getAllNavigationsUsingGET_1",
    "group": "导航",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "导航"
  },
  {
    "type": "get",
    "url": "/api/web/navigations/{id}",
    "title": "根据id获取导航",
    "description": "<p>根据id获取导航</p>",
    "version": "1.1.0",
    "name": "getNavigationUsingGET",
    "group": "导航",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "导航"
  },
  {
    "type": "put",
    "url": "/api/web/navigations",
    "title": "更新导航",
    "description": "<p>更新导航</p>",
    "version": "1.1.0",
    "name": "updateNavigationUsingPUT",
    "group": "导航",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "iconOnClick",
            "description": "<p>点击icon</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "iconUnClick",
            "description": "<p>未点击icon</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sort",
            "description": "<p>新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "导航"
  },
  {
    "type": "post",
    "url": "/api/web/files",
    "title": "文件上传",
    "description": "<p>文件上传</p>",
    "version": "1.1.0",
    "name": "webUploadUsingPOST",
    "group": "文件上传",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "files",
            "description": "<p>files</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "文件上传"
  },
  {
    "type": "get",
    "url": "/api/web/mobile-users/excel",
    "title": "用户列表-导出excel",
    "description": "<p>用户列表-导出excel</p>",
    "version": "1.1.0",
    "name": "downloadExcelUsingGET_1",
    "group": "用户",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registerFrom",
            "description": "<p>注册方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "openId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdDate",
            "description": "<p>注册时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "costStr",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cost",
            "description": "<p>消费金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "用户"
  },
  {
    "type": "get",
    "url": "/api/web/mobile-users",
    "title": "用户列表",
    "description": "<p>用户列表</p>",
    "version": "1.1.0",
    "name": "getAllMobileUsersUsingGET",
    "group": "用户",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registerFrom",
            "description": "<p>注册方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "openId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdDate",
            "description": "<p>注册时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "costStr",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cost",
            "description": "<p>消费金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "用户"
  },
  {
    "type": "get",
    "url": "/api/web/mobile-users/{id}",
    "title": "通过id获取用户详情",
    "description": "<p>通过id获取用户详情</p>",
    "version": "1.1.0",
    "name": "getMobileUserUsingGET_1",
    "group": "用户",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "用户"
  },
  {
    "type": "patch",
    "url": "/api/web/sales/status",
    "title": "优惠码活动上下架",
    "description": "<p>id和status 0下架 1上架</p>",
    "version": "1.1.0",
    "name": "changeStatusUsingPATCH_2",
    "group": "营销管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "beginTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "minusMoney",
            "description": "<p>立减</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "products",
            "description": "<p>适用产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0:下线 1:上线 新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "营销管理"
  },
  {
    "type": "post",
    "url": "/api/web/sales",
    "title": "创建优惠码活动",
    "description": "<p>创建优惠码活动</p>",
    "version": "1.1.0",
    "name": "createSalesUsingPOST",
    "group": "营销管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "beginTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "minusMoney",
            "description": "<p>立减</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "products",
            "description": "<p>适用产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0:下线 1:上线 新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "营销管理"
  },
  {
    "type": "get",
    "url": "/api/web/sales/coupons/excel",
    "title": "优惠码列表-导出excel",
    "description": "<p>优惠码列表-导出excel;salesId必传</p>",
    "version": "1.1.0",
    "name": "downloadExcelUsingGET_3",
    "group": "营销管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "statusStr",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0未核销 1已核销</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "salesName",
            "description": "<p>活动标题</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "salesId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileUserId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastModifiedDate",
            "description": "<p>使用时间</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>兑换码</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "营销管理"
  },
  {
    "type": "post",
    "url": "/api/web/sales/{salesId}/coupons/{amount}",
    "title": "根据活动id生成优惠码",
    "description": "<p>每次最多生成1000条</p>",
    "version": "1.1.0",
    "name": "generateCouponUsingPOST",
    "group": "营销管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "salesId",
            "description": "<p>salesId</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "amount",
            "description": "<p>amount</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "营销管理"
  },
  {
    "type": "get",
    "url": "/api/web/sales/coupons",
    "title": "优惠码列表",
    "description": "<p>salesId必传</p>",
    "version": "1.1.0",
    "name": "getAllCouponsUsingGET",
    "group": "营销管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "statusStr",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0未核销 1已核销</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "salesName",
            "description": "<p>活动标题</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "salesId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileUserId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastModifiedDate",
            "description": "<p>使用时间</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>兑换码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "营销管理"
  },
  {
    "type": "get",
    "url": "/api/web/sales",
    "title": "优惠码活动列表",
    "description": "<p>优惠码活动列表</p>",
    "version": "1.1.0",
    "name": "getAllSalesUsingGET",
    "group": "营销管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0:下线 1:上线 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "products",
            "description": "<p>适用产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "minusMoney",
            "description": "<p>立减</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "beginTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "营销管理"
  },
  {
    "type": "get",
    "url": "/api/web/sales/{id}",
    "title": "根据id获取优惠码活动",
    "description": "<p>根据id获取优惠码活动</p>",
    "version": "1.1.0",
    "name": "getSalesUsingGET",
    "group": "营销管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "营销管理"
  },
  {
    "type": "put",
    "url": "/api/web/sales",
    "title": "更新优惠码活动",
    "description": "<p>更新优惠码活动</p>",
    "version": "1.1.0",
    "name": "updateSalesUsingPUT",
    "group": "营销管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "beginTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "minusMoney",
            "description": "<p>立减</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "products",
            "description": "<p>适用产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0:下线 1:上线 新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "营销管理"
  },
  {
    "type": "post",
    "url": "/api/web/orders/pay/aliPayment",
    "title": "aliPayNotify",
    "description": "<p>undefined</p>",
    "version": "1.1.0",
    "name": "aliPayNotifyUsingPOST",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "post",
    "url": "/api/web/orders/contracts/{contractId}",
    "title": "废除原合同, 发起补签",
    "description": "<p>废除原合同, 发起补签</p>",
    "version": "1.1.0",
    "name": "createContractUsingPOST",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "contractId",
            "description": "<p>contractId</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "get",
    "url": "/api/web/orders/emergency/excel",
    "title": "紧急订单列表-导出excel",
    "description": "<p>紧急订单列表-导出excel</p>",
    "version": "1.1.0",
    "name": "downloadEmergencyExcelUsingGET",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>关闭原因, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purchaseFrom",
            "description": "<p>渠道</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>商品价格, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productName",
            "description": "<p>商品名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productImg",
            "description": "<p>商品图片, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentTime",
            "description": "<p>支付时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentSource",
            "description": "<p>付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentPrice",
            "description": "<p>付款金额, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentNo",
            "description": "<p>支付单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentId",
            "description": "<p>付款信息id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderStatus",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileUserId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employeeName",
            "description": "<p>业务员名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>业务员id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdDate",
            "description": "<p>下单时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponPrice",
            "description": "<p>优惠金额</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponId",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "couponCode",
            "description": "<p>优惠码, 新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "get",
    "url": "/api/web/orders/excel",
    "title": "订单列表-导出excel",
    "description": "<p>订单列表-导出excel</p>",
    "version": "1.1.0",
    "name": "downloadExcelUsingGET_2",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>关闭原因, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purchaseFrom",
            "description": "<p>渠道</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>商品价格, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productName",
            "description": "<p>商品名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productImg",
            "description": "<p>商品图片, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentTime",
            "description": "<p>支付时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentSource",
            "description": "<p>付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentPrice",
            "description": "<p>付款金额, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentNo",
            "description": "<p>支付单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentId",
            "description": "<p>付款信息id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderStatus",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileUserId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employeeName",
            "description": "<p>业务员名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>业务员id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdDate",
            "description": "<p>下单时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponPrice",
            "description": "<p>优惠金额</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponId",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "couponCode",
            "description": "<p>优惠码, 新增不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "get",
    "url": "/api/web/orders",
    "title": "订单列表",
    "description": "<p>订单列表</p>",
    "version": "1.1.0",
    "name": "getAllOrdersUsingGET_1",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>关闭原因, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purchaseFrom",
            "description": "<p>渠道</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>商品价格, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productName",
            "description": "<p>商品名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productImg",
            "description": "<p>商品图片, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentTime",
            "description": "<p>支付时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentSource",
            "description": "<p>付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentPrice",
            "description": "<p>付款金额, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentNo",
            "description": "<p>支付单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentId",
            "description": "<p>付款信息id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderStatus",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileUserId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employeeName",
            "description": "<p>业务员名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>业务员id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdDate",
            "description": "<p>下单时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponPrice",
            "description": "<p>优惠金额</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponId",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "couponCode",
            "description": "<p>优惠码, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "get",
    "url": "/api/web/orders/user-infos/regions",
    "title": "获取地区列表",
    "description": "<p>获取地区列表</p>",
    "version": "1.1.0",
    "name": "getAllRegionsUsingGET",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "get",
    "url": "/api/web/orders/emergency",
    "title": "紧急订单列表",
    "description": "<p>紧急订单列表</p>",
    "version": "1.1.0",
    "name": "getEmergencyOrdersUsingGET",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>关闭原因, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purchaseFrom",
            "description": "<p>渠道</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>商品价格, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productName",
            "description": "<p>商品名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productImg",
            "description": "<p>商品图片, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentTime",
            "description": "<p>支付时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentSource",
            "description": "<p>付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentPrice",
            "description": "<p>付款金额, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentNo",
            "description": "<p>支付单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentId",
            "description": "<p>付款信息id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderStatus",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileUserId",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employeeName",
            "description": "<p>业务员名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>业务员id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdDate",
            "description": "<p>下单时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponPrice",
            "description": "<p>优惠金额</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponId",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "couponCode",
            "description": "<p>优惠码, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "get",
    "url": "/api/web/orders/home-page",
    "title": "订单首页",
    "description": "<p>订单首页</p>",
    "version": "1.1.0",
    "name": "getHomePageUsingGET",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "get",
    "url": "/api/web/orders/{id}",
    "title": "根据id获取订单详情",
    "description": "<p>根据id获取订单详情</p>",
    "version": "1.1.0",
    "name": "getOrderUsingGET_1",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "patch",
    "url": "/api/web/orders/employee",
    "title": "指派业务员",
    "description": "<p>id和employeeId</p>",
    "version": "1.1.0",
    "name": "setEmployeeUsingPATCH",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "couponCode",
            "description": "<p>优惠码, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponId",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponPrice",
            "description": "<p>优惠金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdDate",
            "description": "<p>下单时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>业务员id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employeeName",
            "description": "<p>业务员名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentId",
            "description": "<p>付款信息id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentNo",
            "description": "<p>支付单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentPrice",
            "description": "<p>付款金额, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentSource",
            "description": "<p>付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentTime",
            "description": "<p>支付时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productImg",
            "description": "<p>商品图片, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productName",
            "description": "<p>商品名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>商品价格, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purchaseFrom",
            "description": "<p>渠道</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>关闭原因, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "patch",
    "url": "/api/web/orders",
    "title": "更改订单状态",
    "description": "<p>id和status</p>",
    "version": "1.1.0",
    "name": "updateOrderUsingPATCH",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "couponCode",
            "description": "<p>优惠码, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponId",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "couponPrice",
            "description": "<p>优惠金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdDate",
            "description": "<p>下单时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>业务员id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employeeName",
            "description": "<p>业务员名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称，新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentId",
            "description": "<p>付款信息id, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentNo",
            "description": "<p>支付单号, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentPrice",
            "description": "<p>付款金额, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paymentSource",
            "description": "<p>付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paymentTime",
            "description": "<p>支付时间, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productImg",
            "description": "<p>商品图片, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productName",
            "description": "<p>商品名称, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>商品价格, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purchaseFrom",
            "description": "<p>渠道</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>关闭原因, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "put",
    "url": "/api/web/orders/user-infos",
    "title": "更新用户档案",
    "description": "<p>更新用户档案</p>",
    "version": "1.1.0",
    "name": "updateUserInfoUsingPUT",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>市, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>地区, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "edc",
            "description": "<p>预产期, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hospital",
            "description": "<p>医院, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "idCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastModifiedDate",
            "description": "<p>最后修改时间, 不传</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileUserId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>省, 新增不传</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "userReports",
            "description": "<p>产检报告, 不传</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  },
  {
    "type": "post",
    "url": "/api/web/orders/pay/wxPayment",
    "title": "wxPayNotify",
    "description": "<p>undefined</p>",
    "version": "1.1.0",
    "name": "wxPayNotifyUsingPOST",
    "group": "订单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>bearer token</p>"
          }
        ]
      }
    },
    "filename": "apidoc/document.js",
    "groupTitle": "订单管理"
  }
] });
