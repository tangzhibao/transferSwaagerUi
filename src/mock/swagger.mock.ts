export default {
  swagger: '2.0',
  info: {
      description: '生命库',
      title: 'life_bank',
  },
  host: '192.168.0.249:1027',
  basePath: '/',
  tags: [
      {
          name: '业务员管理',
          description: 'Employee Resource',
      },
      {
          name: '云合同测试',
          description: 'Contract Test Resource',
      },
      {
          name: '商品',
          description: 'Product Resource',
      },
      {
          name: '导航',
          description: 'Navigation Resource',
      },
      {
          name: '文件上传',
          description: 'Upload Controller',
      },
      {
          name: '用户',
          description: 'Mobile User Resource',
      },
      {
          name: '营销管理',
          description: 'Sales Resource',
      },
      {
          name: '订单管理',
          description: 'Order Resource',
      },
  ],
  paths: {
      '/api/web/employees': {
          get: {
              tags: [
                  '业务员管理',
              ],
              summary: '业务员列表',
              description: '业务员列表',
              operationId: 'getAllEmployeesUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'name',
                      in: 'query',
                      description: '名称',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'offset',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'orderFinish',
                      in: 'query',
                      description: '已完成订单, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'orderOngoing',
                      in: 'query',
                      description: '跟踪中订单, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'orderTotal',
                      in: 'query',
                      description: '跟踪订单总数',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageNumber',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageSize',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'region',
                      in: 'query',
                      description: '地区',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'sort.sorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.unsorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '0下线 1上线, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'statusStr',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'unpaged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«业务员»»',
                          originalRef: 'HttpResult«List«业务员»»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          post: {
              tags: [
                  '业务员管理',
              ],
              summary: '新增业务员',
              description: '新增业务员',
              operationId: 'createEmployeeUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'employeeDTO',
                      description: 'employeeDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/业务员',
                          originalRef: '业务员',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«业务员»',
                          originalRef: 'HttpResult«业务员»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          put: {
              tags: [
                  '业务员管理',
              ],
              summary: '更新业务员',
              description: '更新业务员',
              operationId: 'updateEmployeeUsingPUT',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'employeeDTO',
                      description: 'employeeDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/业务员',
                          originalRef: '业务员',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«业务员»',
                          originalRef: 'HttpResult«业务员»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/employees/excel': {
          get: {
              tags: [
                  '业务员管理',
              ],
              summary: '业务员列表-导出excel',
              description: '业务员列表-导出excel',
              operationId: 'downloadExcelUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'name',
                      in: 'query',
                      description: '名称',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'orderFinish',
                      in: 'query',
                      description: '已完成订单, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'orderOngoing',
                      in: 'query',
                      description: '跟踪中订单, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'orderTotal',
                      in: 'query',
                      description: '跟踪订单总数',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'region',
                      in: 'query',
                      description: '地区',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '0下线 1上线, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'statusStr',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/employees/status': {
          patch: {
              tags: [
                  '业务员管理',
              ],
              summary: '业务员上下架',
              description: 'id和status 0下架 1上架',
              operationId: 'changeStatusUsingPATCH',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'employeeDTO',
                      description: 'employeeDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/业务员',
                          originalRef: '业务员',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«业务员»',
                          originalRef: 'HttpResult«业务员»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/employees/{id}': {
          get: {
              tags: [
                  '业务员管理',
              ],
              summary: '通过id业务员',
              description: '通过id业务员',
              operationId: 'getEmployeeUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'path',
                      description: 'id',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«业务员»',
                          originalRef: 'HttpResult«业务员»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/files': {
          post: {
              tags: [
                  '文件上传',
              ],
              summary: '文件上传',
              description: '文件上传',
              operationId: 'webUploadUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'files',
                      in: 'formData',
                      description: 'files',
                      required: true,
                      type: 'array',
                      items: {
                          type: 'file',
                      },
                      collectionFormat: 'multi',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«上传文件信息»»',
                          originalRef: 'HttpResult«List«上传文件信息»»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/mobile-users': {
          get: {
              tags: [
                  '用户',
              ],
              summary: '用户列表',
              description: '用户列表',
              operationId: 'getAllMobileUsersUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'avatar',
                      in: 'query',
                      description: '头像',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'cost',
                      in: 'query',
                      description: '消费金额',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'costStr',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'createdDate',
                      in: 'query',
                      description: '注册时间',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'nickname',
                      in: 'query',
                      description: '昵称',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'offset',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'openId',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'pageNumber',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageSize',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'registerFrom',
                      in: 'query',
                      description: '注册方式',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'sort.sorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.unsorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'unpaged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«用户»»',
                          originalRef: 'HttpResult«List«用户»»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/mobile-users/excel': {
          get: {
              tags: [
                  '用户',
              ],
              summary: '用户列表-导出excel',
              description: '用户列表-导出excel',
              operationId: 'downloadExcelUsingGET_1',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'avatar',
                      in: 'query',
                      description: '头像',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'cost',
                      in: 'query',
                      description: '消费金额',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'costStr',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'createdDate',
                      in: 'query',
                      description: '注册时间',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'nickname',
                      in: 'query',
                      description: '昵称',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'openId',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'registerFrom',
                      in: 'query',
                      description: '注册方式',
                      required: false,
                      type: 'string',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/mobile-users/{id}': {
          get: {
              tags: [
                  '用户',
              ],
              summary: '通过id获取用户详情',
              description: '通过id获取用户详情',
              operationId: 'getMobileUserUsingGET_1',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'path',
                      description: 'id',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«用户详情»',
                          originalRef: 'HttpResult«用户详情»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/navigations': {
          get: {
              tags: [
                  '导航',
              ],
              summary: '导航列表',
              description: '导航列表',
              operationId: 'getAllNavigationsUsingGET_1',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«导航栏»»',
                          originalRef: 'HttpResult«List«导航栏»»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          post: {
              tags: [
                  '导航',
              ],
              summary: '新增导航',
              description: '新增导航',
              operationId: 'createNavigationUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'navigationDTO',
                      description: 'navigationDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/导航栏',
                          originalRef: '导航栏',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«导航栏»',
                          originalRef: 'HttpResult«导航栏»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          put: {
              tags: [
                  '导航',
              ],
              summary: '更新导航',
              description: '更新导航',
              operationId: 'updateNavigationUsingPUT',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'navigationDTO',
                      description: 'navigationDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/导航栏',
                          originalRef: '导航栏',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«导航栏»',
                          originalRef: 'HttpResult«导航栏»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/navigations/sequence': {
          patch: {
              tags: [
                  '导航',
              ],
              summary: '排序',
              description: '传id1, id2',
              operationId: 'changeSequenceUsingPATCH',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'map',
                      description: 'map',
                      required: true,
                      schema: {
                          type: 'object',
                          additionalProperties: {
                              type: 'integer',
                              format: 'int64',
                          },
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«Void»',
                          originalRef: 'HttpResult«Void»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/navigations/{id}': {
          get: {
              tags: [
                  '导航',
              ],
              summary: '根据id获取导航',
              description: '根据id获取导航',
              operationId: 'getNavigationUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'path',
                      description: 'id',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«导航栏»',
                          originalRef: 'HttpResult«导航栏»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          delete: {
              tags: [
                  '导航',
              ],
              summary: '根据id删除导航',
              description: '根据id删除导航',
              operationId: 'deleteNavigationUsingDELETE',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'path',
                      description: 'id',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«Void»',
                          originalRef: 'HttpResult«Void»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders': {
          get: {
              tags: [
                  '订单管理',
              ],
              summary: '订单列表',
              description: '订单列表',
              operationId: 'getAllOrdersUsingGET_1',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'couponCode',
                      in: 'query',
                      description: '优惠码, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'couponId',
                      in: 'query',
                      description: '优惠券id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'couponPrice',
                      in: 'query',
                      description: '优惠金额',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'createdDate',
                      in: 'query',
                      description: '下单时间, 新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'employeeId',
                      in: 'query',
                      description: '业务员id, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'employeeName',
                      in: 'query',
                      description: '业务员名称, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号，新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'mobileUserId',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'nickname',
                      in: 'query',
                      description: '用户昵称，新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'offset',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'orderNo',
                      in: 'query',
                      description: '订单号, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'orderStatus',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'pageNumber',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageSize',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'paymentId',
                      in: 'query',
                      description: '付款信息id, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'paymentNo',
                      in: 'query',
                      description: '支付单号, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'paymentPrice',
                      in: 'query',
                      description: '付款金额, 新增不传',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'paymentSource',
                      in: 'query',
                      description: '付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paymentTime',
                      in: 'query',
                      description: '支付时间, 新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'productId',
                      in: 'query',
                      description: '商品id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'productImg',
                      in: 'query',
                      description: '商品图片, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'productName',
                      in: 'query',
                      description: '商品名称, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'productPrice',
                      in: 'query',
                      description: '商品价格, 新增不传',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'purchaseFrom',
                      in: 'query',
                      description: '渠道',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'remark',
                      in: 'query',
                      description: '关闭原因, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'sort.sorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.unsorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'unpaged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«订单»»',
                          originalRef: 'HttpResult«List«订单»»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          patch: {
              tags: [
                  '订单管理',
              ],
              summary: '更改订单状态',
              description: 'id和status',
              operationId: 'updateOrderUsingPATCH',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'orderDTO',
                      description: 'orderDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/订单',
                          originalRef: '订单',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«订单»',
                          originalRef: 'HttpResult«订单»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/contracts/{contractId}': {
          post: {
              tags: [
                  '订单管理',
              ],
              summary: '废除原合同, 发起补签',
              description: '废除原合同, 发起补签',
              operationId: 'createContractUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'contractId',
                      in: 'path',
                      description: 'contractId',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«合同»',
                          originalRef: 'HttpResult«合同»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/emergency': {
          get: {
              tags: [
                  '订单管理',
              ],
              summary: '紧急订单列表',
              description: '紧急订单列表',
              operationId: 'getEmergencyOrdersUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'couponCode',
                      in: 'query',
                      description: '优惠码, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'couponId',
                      in: 'query',
                      description: '优惠券id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'couponPrice',
                      in: 'query',
                      description: '优惠金额',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'createdDate',
                      in: 'query',
                      description: '下单时间, 新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'employeeId',
                      in: 'query',
                      description: '业务员id, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'employeeName',
                      in: 'query',
                      description: '业务员名称, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号，新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'mobileUserId',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'nickname',
                      in: 'query',
                      description: '用户昵称，新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'offset',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'orderNo',
                      in: 'query',
                      description: '订单号, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'orderStatus',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'pageNumber',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageSize',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'paymentId',
                      in: 'query',
                      description: '付款信息id, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'paymentNo',
                      in: 'query',
                      description: '支付单号, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'paymentPrice',
                      in: 'query',
                      description: '付款金额, 新增不传',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'paymentSource',
                      in: 'query',
                      description: '付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paymentTime',
                      in: 'query',
                      description: '支付时间, 新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'productId',
                      in: 'query',
                      description: '商品id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'productImg',
                      in: 'query',
                      description: '商品图片, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'productName',
                      in: 'query',
                      description: '商品名称, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'productPrice',
                      in: 'query',
                      description: '商品价格, 新增不传',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'purchaseFrom',
                      in: 'query',
                      description: '渠道',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'remark',
                      in: 'query',
                      description: '关闭原因, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'sort.sorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.unsorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'unpaged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult',
                          originalRef: 'HttpResult',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/emergency/excel': {
          get: {
              tags: [
                  '订单管理',
              ],
              summary: '紧急订单列表-导出excel',
              description: '紧急订单列表-导出excel',
              operationId: 'downloadEmergencyExcelUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'couponCode',
                      in: 'query',
                      description: '优惠码, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'couponId',
                      in: 'query',
                      description: '优惠券id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'couponPrice',
                      in: 'query',
                      description: '优惠金额',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'createdDate',
                      in: 'query',
                      description: '下单时间, 新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'employeeId',
                      in: 'query',
                      description: '业务员id, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'employeeName',
                      in: 'query',
                      description: '业务员名称, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号，新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'mobileUserId',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'nickname',
                      in: 'query',
                      description: '用户昵称，新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'orderNo',
                      in: 'query',
                      description: '订单号, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'orderStatus',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'paymentId',
                      in: 'query',
                      description: '付款信息id, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'paymentNo',
                      in: 'query',
                      description: '支付单号, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'paymentPrice',
                      in: 'query',
                      description: '付款金额, 新增不传',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'paymentSource',
                      in: 'query',
                      description: '付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paymentTime',
                      in: 'query',
                      description: '支付时间, 新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'productId',
                      in: 'query',
                      description: '商品id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'productImg',
                      in: 'query',
                      description: '商品图片, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'productName',
                      in: 'query',
                      description: '商品名称, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'productPrice',
                      in: 'query',
                      description: '商品价格, 新增不传',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'purchaseFrom',
                      in: 'query',
                      description: '渠道',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'remark',
                      in: 'query',
                      description: '关闭原因, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/employee': {
          patch: {
              tags: [
                  '订单管理',
              ],
              summary: '指派业务员',
              description: 'id和employeeId',
              operationId: 'setEmployeeUsingPATCH',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'orderDTO',
                      description: 'orderDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/订单',
                          originalRef: '订单',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«订单»',
                          originalRef: 'HttpResult«订单»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/excel': {
          get: {
              tags: [
                  '订单管理',
              ],
              summary: '订单列表-导出excel',
              description: '订单列表-导出excel',
              operationId: 'downloadExcelUsingGET_2',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'couponCode',
                      in: 'query',
                      description: '优惠码, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'couponId',
                      in: 'query',
                      description: '优惠券id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'couponPrice',
                      in: 'query',
                      description: '优惠金额',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'createdDate',
                      in: 'query',
                      description: '下单时间, 新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'employeeId',
                      in: 'query',
                      description: '业务员id, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'employeeName',
                      in: 'query',
                      description: '业务员名称, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号，新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'mobileUserId',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'nickname',
                      in: 'query',
                      description: '用户昵称，新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'orderNo',
                      in: 'query',
                      description: '订单号, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'orderStatus',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'paymentId',
                      in: 'query',
                      description: '付款信息id, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'paymentNo',
                      in: 'query',
                      description: '支付单号, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'paymentPrice',
                      in: 'query',
                      description: '付款金额, 新增不传',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'paymentSource',
                      in: 'query',
                      description: '付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paymentTime',
                      in: 'query',
                      description: '支付时间, 新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'productId',
                      in: 'query',
                      description: '商品id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'productImg',
                      in: 'query',
                      description: '商品图片, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'productName',
                      in: 'query',
                      description: '商品名称, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'productPrice',
                      in: 'query',
                      description: '商品价格, 新增不传',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'purchaseFrom',
                      in: 'query',
                      description: '渠道',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'remark',
                      in: 'query',
                      description: '关闭原因, 新增不传',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/home-page': {
          get: {
              tags: [
                  '订单管理',
              ],
              summary: '订单首页',
              description: '订单首页',
              operationId: 'getHomePageUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'offset',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'pageNumber',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageSize',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.sorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.unsorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'unpaged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult',
                          originalRef: 'HttpResult',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/pay/aliPayment': {
          post: {
              tags: [
                  '订单管理',
              ],
              summary: 'aliPayNotify',
              operationId: 'aliPayNotifyUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          type: 'string',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/pay/test-contract': {
          post: {
              tags: [
                  '云合同测试',
              ],
              summary: '测试合同接口',
              description: '测试合同接口',
              operationId: 'testContractUsingPOST',
              consumes: [
                  'multipart/form-data',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'signFile',
                      in: 'formData',
                      description: 'signFile',
                      required: true,
                      type: 'file',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«string»',
                          originalRef: 'HttpResult«string»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/pay/test-real': {
          post: {
              tags: [
                  '云合同测试',
              ],
              summary: '测试实名验证',
              description: '测试实名验证',
              operationId: 'testRealNameUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«string»',
                          originalRef: 'HttpResult«string»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/pay/upload-seal': {
          post: {
              tags: [
                  '云合同测试',
              ],
              summary: '上传自定义印章',
              description: '上传自定义印章',
              operationId: 'uploadSealUsingPOST',
              consumes: [
                  'multipart/form-data',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'signFile',
                      in: 'formData',
                      description: 'signFile',
                      required: true,
                      type: 'file',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«string»',
                          originalRef: 'HttpResult«string»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/pay/wxPayment': {
          post: {
              tags: [
                  '订单管理',
              ],
              summary: 'wxPayNotify',
              operationId: 'wxPayNotifyUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          type: 'string',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/user-infos': {
          put: {
              tags: [
                  '订单管理',
              ],
              summary: '更新用户档案',
              description: '更新用户档案',
              operationId: 'updateUserInfoUsingPUT',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'userInfoDTO',
                      description: 'userInfoDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/用户档案',
                          originalRef: '用户档案',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«用户档案»',
                          originalRef: 'HttpResult«用户档案»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/user-infos/regions': {
          get: {
              tags: [
                  '订单管理',
              ],
              summary: '获取地区列表',
              description: '获取地区列表',
              operationId: 'getAllRegionsUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«RegionDTO»»',
                          originalRef: 'HttpResult«List«RegionDTO»»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/orders/{id}': {
          get: {
              tags: [
                  '订单管理',
              ],
              summary: '根据id获取订单详情',
              description: '根据id获取订单详情',
              operationId: 'getOrderUsingGET_1',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'path',
                      description: 'id',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«OrderVO»',
                          originalRef: 'HttpResult«OrderVO»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/products': {
          get: {
              tags: [
                  '商品',
              ],
              summary: '商品列表',
              description: '商品列表',
              operationId: 'getAllProductsUsingGET_1',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'description',
                      in: 'query',
                      description: '服务说明',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'feature',
                      in: 'query',
                      description: '产品特色',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'imgUrl',
                      in: 'query',
                      description: '主图',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'info',
                      in: 'query',
                      description: '套餐详情',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'lastModifiedDate',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'name',
                      in: 'query',
                      description: '名称',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'offset',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'pageNumber',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageSize',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'price',
                      in: 'query',
                      description: '价格',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'productPics[0].id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'productPics[0].productId',
                      in: 'query',
                      description: '商品id',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'productPics[0].sort',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'productPics[0].url',
                      in: 'query',
                      description: '图片链接',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'qidai',
                      in: 'query',
                      description: '脐带',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'sort',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'sort.sorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.unsorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '0:下架 1:上架 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'storeYear',
                      in: 'query',
                      description: '储存年限',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'taiPai',
                      in: 'query',
                      description: '胎盘',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'unpaged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'yangMo',
                      in: 'query',
                      description: '羊膜',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«商品»»',
                          originalRef: 'HttpResult«List«商品»»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          post: {
              tags: [
                  '商品',
              ],
              summary: '创建商品',
              description: '创建商品',
              operationId: 'createProductUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'productDTO',
                      description: 'productDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/商品',
                          originalRef: '商品',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«商品»',
                          originalRef: 'HttpResult«商品»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          put: {
              tags: [
                  '商品',
              ],
              summary: '更新商品',
              description: '更新商品',
              operationId: 'updateProductUsingPUT',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'productDTO',
                      description: 'productDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/商品',
                          originalRef: '商品',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«商品»',
                          originalRef: 'HttpResult«商品»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/products/product-pics/sequence': {
          patch: {
              tags: [
                  '商品',
              ],
              summary: '商品图片排序',
              description: '传id1, id2',
              operationId: 'changePicSequenceUsingPATCH',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'map',
                      description: 'map',
                      required: true,
                      schema: {
                          type: 'object',
                          additionalProperties: {
                              type: 'integer',
                              format: 'int64',
                          },
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«Void»',
                          originalRef: 'HttpResult«Void»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/products/sequence': {
          patch: {
              tags: [
                  '商品',
              ],
              summary: '商品排序',
              description: '传id1, id2',
              operationId: 'changeSequenceUsingPATCH_1',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'map',
                      description: 'map',
                      required: true,
                      schema: {
                          type: 'object',
                          additionalProperties: {
                              type: 'integer',
                              format: 'int64',
                          },
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«Void»',
                          originalRef: 'HttpResult«Void»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/products/status': {
          patch: {
              tags: [
                  '商品',
              ],
              summary: '商品上下架',
              description: 'id和status 0下架 1上架',
              operationId: 'changeStatusUsingPATCH_1',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'productDTO',
                      description: 'productDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/商品',
                          originalRef: '商品',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«商品»',
                          originalRef: 'HttpResult«商品»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/products/{id}': {
          get: {
              tags: [
                  '商品',
              ],
              summary: '根据id获取商品',
              description: '根据id获取商品',
              operationId: 'getProductUsingGET_1',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'path',
                      description: 'id',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«商品»',
                          originalRef: 'HttpResult«商品»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/sales': {
          get: {
              tags: [
                  '营销管理',
              ],
              summary: '优惠码活动列表',
              description: '优惠码活动列表',
              operationId: 'getAllSalesUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'beginTime',
                      in: 'query',
                      description: '开始时间',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'endTime',
                      in: 'query',
                      description: '结束时间',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      description: '新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'minusMoney',
                      in: 'query',
                      description: '立减',
                      required: false,
                      type: 'number',
                      format: 'double',
                  },
                  {
                      name: 'name',
                      in: 'query',
                      description: '名称',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'offset',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'pageNumber',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageSize',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'products',
                      in: 'query',
                      description: '适用产品id',
                      required: false,
                      type: 'array',
                      items: {
                          type: 'integer',
                          format: 'int64',
                      },
                      collectionFormat: 'multi',
                  },
                  {
                      name: 'sort.sorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.unsorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '0:下线 1:上线 新增不传',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'unpaged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«优惠码活动»»',
                          originalRef: 'HttpResult«List«优惠码活动»»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          post: {
              tags: [
                  '营销管理',
              ],
              summary: '创建优惠码活动',
              description: '创建优惠码活动',
              operationId: 'createSalesUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'salesDTO',
                      description: 'salesDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/优惠码活动',
                          originalRef: '优惠码活动',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«优惠码活动»',
                          originalRef: 'HttpResult«优惠码活动»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
          put: {
              tags: [
                  '营销管理',
              ],
              summary: '更新优惠码活动',
              description: '更新优惠码活动',
              operationId: 'updateSalesUsingPUT',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'salesDTO',
                      description: 'salesDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/优惠码活动',
                          originalRef: '优惠码活动',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«优惠码活动»',
                          originalRef: 'HttpResult«优惠码活动»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/sales/coupons': {
          get: {
              tags: [
                  '营销管理',
              ],
              summary: '优惠码列表',
              description: 'salesId必传',
              operationId: 'getAllCouponsUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'code',
                      in: 'query',
                      description: '兑换码',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'lastModifiedDate',
                      in: 'query',
                      description: '使用时间',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'mobileUserId',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'nickname',
                      in: 'query',
                      description: '昵称',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'offset',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'orderNo',
                      in: 'query',
                      description: '订单号',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'pageNumber',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'pageSize',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'paged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'salesId',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'salesName',
                      in: 'query',
                      description: '活动标题',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'sort.sorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'sort.unsorted',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '0未核销 1已核销',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'statusStr',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'unpaged',
                      in: 'query',
                      required: false,
                      type: 'boolean',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«List«优惠码»»',
                          originalRef: 'HttpResult«List«优惠码»»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/sales/coupons/excel': {
          get: {
              tags: [
                  '营销管理',
              ],
              summary: '优惠码列表-导出excel',
              description: '优惠码列表-导出excel;salesId必传',
              operationId: 'downloadExcelUsingGET_3',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'code',
                      in: 'query',
                      description: '兑换码',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'lastModifiedDate',
                      in: 'query',
                      description: '使用时间',
                      required: false,
                      type: 'string',
                      format: 'date-time',
                  },
                  {
                      name: 'mobile',
                      in: 'query',
                      description: '手机号',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'mobileUserId',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'nickname',
                      in: 'query',
                      description: '昵称',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'orderNo',
                      in: 'query',
                      description: '订单号',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'salesId',
                      in: 'query',
                      required: false,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'salesName',
                      in: 'query',
                      description: '活动标题',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'status',
                      in: 'query',
                      description: '0未核销 1已核销',
                      required: false,
                      type: 'integer',
                      format: 'int32',
                  },
                  {
                      name: 'statusStr',
                      in: 'query',
                      required: false,
                      type: 'string',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/sales/status': {
          patch: {
              tags: [
                  '营销管理',
              ],
              summary: '优惠码活动上下架',
              description: 'id和status 0下架 1上架',
              operationId: 'changeStatusUsingPATCH_2',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      in: 'body',
                      name: 'salesDTO',
                      description: 'salesDTO',
                      required: true,
                      schema: {
                          $ref: '#/definitions/优惠码活动',
                          originalRef: '优惠码活动',
                      },
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«优惠码活动»',
                          originalRef: 'HttpResult«优惠码活动»',
                      },
                  },
                  204: {
                      description: 'No Content',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/sales/{id}': {
          get: {
              tags: [
                  '营销管理',
              ],
              summary: '根据id获取优惠码活动',
              description: '根据id获取优惠码活动',
              operationId: 'getSalesUsingGET',
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'id',
                      in: 'path',
                      description: 'id',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«优惠码活动»',
                          originalRef: 'HttpResult«优惠码活动»',
                      },
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
      '/api/web/sales/{salesId}/coupons/{amount}': {
          post: {
              tags: [
                  '营销管理',
              ],
              summary: '根据活动id生成优惠码',
              description: '每次最多生成1000条',
              operationId: 'generateCouponUsingPOST',
              consumes: [
                  'application/json',
              ],
              produces: [
                  '*/*',
              ],
              parameters: [
                  {
                      name: 'amount',
                      in: 'path',
                      description: 'amount',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
                  {
                      name: 'authorization',
                      in: 'header',
                      description: 'bearer token',
                      required: false,
                      type: 'string',
                  },
                  {
                      name: 'salesId',
                      in: 'path',
                      description: 'salesId',
                      required: true,
                      type: 'integer',
                      format: 'int64',
                  },
              ],
              responses: {
                  200: {
                      description: 'OK',
                      schema: {
                          $ref: '#/definitions/HttpResult«Void»',
                          originalRef: 'HttpResult«Void»',
                      },
                  },
                  201: {
                      description: 'Created',
                  },
                  401: {
                      description: 'Unauthorized',
                  },
                  403: {
                      description: 'Forbidden',
                  },
                  404: {
                      description: 'Not Found',
                  },
              },
              deprecated: false,
          },
      },
  },
  definitions: {
      'HttpResult': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'object',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult',
      },
      'HttpResult«List«RegionDTO»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/RegionDTO',
                      originalRef: 'RegionDTO',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«RegionDTO»»',
      },
      'HttpResult«List«上传文件信息»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/上传文件信息',
                      originalRef: '上传文件信息',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«上传文件信息»»',
      },
      'HttpResult«List«业务员»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/业务员',
                      originalRef: '业务员',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«业务员»»',
      },
      'HttpResult«List«优惠码»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/优惠码',
                      originalRef: '优惠码',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«优惠码»»',
      },
      'HttpResult«List«优惠码活动»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/优惠码活动',
                      originalRef: '优惠码活动',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«优惠码活动»»',
      },
      'HttpResult«List«商品»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/商品',
                      originalRef: '商品',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«商品»»',
      },
      'HttpResult«List«导航栏»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/导航栏',
                      originalRef: '导航栏',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«导航栏»»',
      },
      'HttpResult«List«用户»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/用户',
                      originalRef: '用户',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«用户»»',
      },
      'HttpResult«List«订单»»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/订单',
                      originalRef: '订单',
                  },
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«List«订单»»',
      },
      'HttpResult«OrderVO»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/OrderVO',
                  originalRef: 'OrderVO',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«OrderVO»',
      },
      'HttpResult«Void»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«Void»',
      },
      'HttpResult«string»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  type: 'string',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«string»',
      },
      'HttpResult«业务员»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/业务员',
                  originalRef: '业务员',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«业务员»',
      },
      'HttpResult«优惠码活动»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/优惠码活动',
                  originalRef: '优惠码活动',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«优惠码活动»',
      },
      'HttpResult«合同»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/合同',
                  originalRef: '合同',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«合同»',
      },
      'HttpResult«商品»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/商品',
                  originalRef: '商品',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«商品»',
      },
      'HttpResult«导航栏»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/导航栏',
                  originalRef: '导航栏',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«导航栏»',
      },
      'HttpResult«用户档案»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/用户档案',
                  originalRef: '用户档案',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«用户档案»',
      },
      'HttpResult«用户详情»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/用户详情',
                  originalRef: '用户详情',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«用户详情»',
      },
      'HttpResult«订单»': {
          type: 'object',
          properties: {
              code: {
                  type: 'integer',
                  format: 'int32',
              },
              data: {
                  $ref: '#/definitions/订单',
                  originalRef: '订单',
              },
              message: {
                  type: 'string',
              },
              pagination: {
                  $ref: '#/definitions/Pagination',
                  originalRef: 'Pagination',
              },
          },
          title: 'HttpResult«订单»',
      },
      'OrderVO': {
          type: 'object',
          properties: {
              contractDTOS: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/合同',
                      originalRef: '合同',
                  },
              },
              orderDTO: {
                  $ref: '#/definitions/订单',
                  originalRef: '订单',
              },
              userInfoDTO: {
                  $ref: '#/definitions/用户档案',
                  originalRef: '用户档案',
              },
          },
          title: 'OrderVO',
      },
      'Pagination': {
          type: 'object',
          properties: {
              page: {
                  type: 'integer',
                  format: 'int32',
              },
              size: {
                  type: 'integer',
                  format: 'int32',
              },
              total: {
                  type: 'integer',
                  format: 'int64',
              },
          },
          title: 'Pagination',
      },
      'RegionDTO': {
          type: 'object',
          properties: {
              children: {
                  type: 'array',
                  items: {
                      $ref: '#/definitions/RegionDTO',
                      originalRef: 'RegionDTO',
                  },
              },
              code: {
                  type: 'string',
              },
              name: {
                  type: 'string',
              },
          },
          title: 'RegionDTO',
      },
      'UserReportDTO': {
          type: 'object',
          properties: {
              id: {
                  type: 'integer',
                  format: 'int64',
              },
              url: {
                  type: 'string',
              },
              userInfoId: {
                  type: 'integer',
                  format: 'int64',
              },
          },
          title: 'UserReportDTO',
      },
      '上传文件信息': {
          type: 'object',
          properties: {
              extension: {
                  type: 'string',
                  description: '文件扩展名',
              },
              fileName: {
                  type: 'string',
                  description: '文件名称',
              },
              originalFilename: {
                  type: 'string',
                  description: '文件原始名称',
              },
              size: {
                  type: 'integer',
                  format: 'int64',
                  description: '文件大小',
              },
              times: {
                  type: 'integer',
                  format: 'int64',
                  description: '媒体文件播放时长',
              },
              url: {
                  type: 'string',
                  description: '文件路径',
              },
          },
          title: '上传文件信息',
      },
      '业务员': {
          type: 'object',
          properties: {
              id: {
                  type: 'integer',
                  format: 'int64',
                  description: '新增不传',
              },
              mobile: {
                  type: 'string',
                  description: '手机号',
              },
              name: {
                  type: 'string',
                  description: '名称',
              },
              orderFinish: {
                  type: 'integer',
                  format: 'int32',
                  description: '已完成订单, 新增不传',
              },
              orderOngoing: {
                  type: 'integer',
                  format: 'int32',
                  description: '跟踪中订单, 新增不传',
              },
              orderTotal: {
                  type: 'integer',
                  format: 'int32',
                  description: '跟踪订单总数',
              },
              region: {
                  type: 'string',
                  description: '地区',
              },
              status: {
                  type: 'integer',
                  format: 'int32',
                  description: '0下线 1上线, 新增不传',
              },
          },
          title: '业务员',
      },
      '优惠码': {
          type: 'object',
          properties: {
              code: {
                  type: 'string',
                  description: '兑换码',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
              },
              lastModifiedDate: {
                  type: 'string',
                  format: 'date-time',
                  description: '使用时间',
              },
              mobile: {
                  type: 'string',
                  description: '手机号',
              },
              nickname: {
                  type: 'string',
                  description: '昵称',
              },
              orderNo: {
                  type: 'string',
                  description: '订单号',
              },
              salesName: {
                  type: 'string',
                  description: '活动标题',
              },
              status: {
                  type: 'integer',
                  format: 'int32',
                  description: '0未核销 1已核销',
              },
          },
          title: '优惠码',
      },
      '优惠码活动': {
          type: 'object',
          properties: {
              beginTime: {
                  type: 'string',
                  format: 'date-time',
                  description: '开始时间',
              },
              endTime: {
                  type: 'string',
                  format: 'date-time',
                  description: '结束时间',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
                  description: '新增不传',
              },
              minusMoney: {
                  type: 'number',
                  format: 'double',
                  description: '立减',
              },
              name: {
                  type: 'string',
                  description: '名称',
              },
              products: {
                  type: 'array',
                  description: '适用产品id',
                  items: {
                      type: 'integer',
                      format: 'int64',
                  },
              },
              status: {
                  type: 'integer',
                  format: 'int32',
                  description: '0:下线 1:上线 新增不传',
              },
          },
          title: '优惠码活动',
      },
      '合同': {
          type: 'object',
          properties: {
              code: {
                  type: 'string',
                  description: '编号, 新增不传',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
                  description: '新增不传',
              },
              lastModifiedDate: {
                  type: 'string',
                  format: 'date-time',
                  description: '签署时间, 不传',
              },
              name: {
                  type: 'string',
                  description: '签署人, 新增不传',
              },
              orderId: {
                  type: 'integer',
                  format: 'int64',
                  description: '订单id',
              },
              status: {
                  type: 'integer',
                  format: 'int32',
                  description: '状态 0未签署 1正常 2作废, 新增不传',
              },
              url: {
                  type: 'string',
                  description: '链接, 新增不传',
              },
          },
          title: '合同',
      },
      '商品': {
          type: 'object',
          properties: {
              description: {
                  type: 'string',
                  description: '服务说明',
              },
              feature: {
                  type: 'string',
                  description: '产品特色',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
                  description: '新增不传',
              },
              imgUrl: {
                  type: 'string',
                  description: '主图',
              },
              info: {
                  type: 'string',
                  description: '套餐详情',
              },
              lastModifiedDate: {
                  type: 'string',
                  format: 'date-time',
                  description: '新增不传',
              },
              name: {
                  type: 'string',
                  description: '名称',
              },
              price: {
                  type: 'number',
                  format: 'double',
                  description: '价格',
              },
              productPics: {
                  type: 'array',
                  description: '图片数组',
                  items: {
                      $ref: '#/definitions/商品照片',
                      originalRef: '商品照片',
                  },
              },
              qidai: {
                  type: 'integer',
                  format: 'int32',
                  description: '脐带',
              },
              sort: {
                  type: 'integer',
                  format: 'int32',
                  description: '新增不传',
              },
              status: {
                  type: 'integer',
                  format: 'int32',
                  description: '0:下架 1:上架 新增不传',
              },
              storeYear: {
                  type: 'integer',
                  format: 'int32',
                  description: '储存年限',
              },
              taiPai: {
                  type: 'integer',
                  format: 'int32',
                  description: '胎盘',
              },
              yangMo: {
                  type: 'integer',
                  format: 'int32',
                  description: '羊膜',
              },
          },
          title: '商品',
      },
      '商品照片': {
          type: 'object',
          properties: {
              id: {
                  type: 'integer',
                  format: 'int64',
                  description: '新增不传',
              },
              productId: {
                  type: 'integer',
                  format: 'int64',
                  description: '商品id',
              },
              sort: {
                  type: 'integer',
                  format: 'int32',
                  description: '新增不传',
              },
              url: {
                  type: 'string',
                  description: '图片链接',
              },
          },
          title: '商品照片',
      },
      '导航栏': {
          type: 'object',
          properties: {
              iconOnClick: {
                  type: 'string',
                  description: '点击icon',
              },
              iconUnClick: {
                  type: 'string',
                  description: '未点击icon',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
                  description: '新增不传',
              },
              name: {
                  type: 'string',
                  description: '名称',
              },
              sort: {
                  type: 'integer',
                  format: 'int32',
                  description: '新增不传',
              },
          },
          title: '导航栏',
      },
      '手机订单': {
          type: 'object',
          properties: {
              contractDate: {
                  type: 'string',
                  format: 'date-time',
                  description: '签署时间',
              },
              contractId: {
                  type: 'integer',
                  format: 'int64',
                  description: '合同id',
              },
              contractNo: {
                  type: 'string',
                  description: '合同编号',
              },
              contractPerson: {
                  type: 'string',
                  description: '签署人',
              },
              couponPrice: {
                  type: 'number',
                  format: 'double',
                  description: '优惠金额',
              },
              createdDate: {
                  type: 'string',
                  format: 'date-time',
                  description: '下单时间',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
              },
              mobile: {
                  type: 'string',
                  description: '联系方式',
              },
              orderNo: {
                  type: 'string',
                  description: '订单号',
              },
              paymentNo: {
                  type: 'string',
                  description: '支付单号',
              },
              paymentPrice: {
                  type: 'number',
                  format: 'double',
                  description: '实付付款金额',
              },
              paymentSource: {
                  type: 'integer',
                  format: 'int32',
                  description: '付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传',
              },
              paymentTime: {
                  type: 'string',
                  format: 'date-time',
                  description: '支付时间',
              },
              productImg: {
                  type: 'string',
                  description: '商品图片',
              },
              productName: {
                  type: 'string',
                  description: '商品名称',
              },
              productPrice: {
                  type: 'number',
                  format: 'double',
                  description: '商品价格, 新增不传',
              },
              remark: {
                  type: 'string',
                  description: '关闭原因',
              },
              status: {
                  type: 'integer',
                  format: 'int32',
                  description: '订单状态',
              },
          },
          title: '手机订单',
      },
      '用户': {
          type: 'object',
          properties: {
              avatar: {
                  type: 'string',
                  description: '头像',
              },
              cost: {
                  type: 'number',
                  format: 'double',
                  description: '消费金额',
              },
              createdDate: {
                  type: 'string',
                  format: 'date-time',
                  description: '注册时间',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
              },
              mobile: {
                  type: 'string',
                  description: '手机号',
              },
              nickname: {
                  type: 'string',
                  description: '昵称',
              },
              registerFrom: {
                  type: 'string',
                  description: '注册方式',
              },
          },
          title: '用户',
      },
      '用户档案': {
          type: 'object',
          properties: {
              city: {
                  type: 'string',
                  description: '市, 新增不传',
              },
              district: {
                  type: 'string',
                  description: '地区, 新增不传',
              },
              edc: {
                  type: 'string',
                  format: 'date-time',
                  description: '预产期, 新增不传',
              },
              hospital: {
                  type: 'string',
                  description: '医院, 新增不传',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
              },
              idCard: {
                  type: 'string',
                  description: '身份证',
              },
              lastModifiedDate: {
                  type: 'string',
                  format: 'date-time',
                  description: '最后修改时间, 不传',
              },
              mobile: {
                  type: 'string',
                  description: '手机号',
              },
              mobileUserId: {
                  type: 'integer',
                  format: 'int64',
                  description: '用户id',
              },
              name: {
                  type: 'string',
                  description: '用户名称',
              },
              orderId: {
                  type: 'integer',
                  format: 'int64',
                  description: '订单id',
              },
              orderNo: {
                  type: 'string',
                  description: '订单号',
              },
              province: {
                  type: 'string',
                  description: '省, 新增不传',
              },
              userReports: {
                  type: 'array',
                  description: '产检报告, 不传',
                  items: {
                      $ref: '#/definitions/UserReportDTO',
                      originalRef: 'UserReportDTO',
                  },
              },
          },
          title: '用户档案',
      },
      '用户详情': {
          type: 'object',
          properties: {
              mobileUserDTO: {
                  description: '用户信息',
                  $ref: '#/definitions/用户',
                  originalRef: '用户',
              },
              orderMobileVOList: {
                  type: 'array',
                  description: '用户订单',
                  items: {
                      $ref: '#/definitions/手机订单',
                      originalRef: '手机订单',
                  },
              },
              userInfoDTOList: {
                  type: 'array',
                  description: '用户档案',
                  items: {
                      $ref: '#/definitions/用户档案',
                      originalRef: '用户档案',
                  },
              },
          },
          title: '用户详情',
      },
      '订单': {
          type: 'object',
          properties: {
              couponCode: {
                  type: 'string',
                  description: '优惠码, 新增不传',
              },
              couponId: {
                  type: 'integer',
                  format: 'int64',
                  description: '优惠券id',
              },
              couponPrice: {
                  type: 'number',
                  format: 'double',
                  description: '优惠金额',
              },
              createdDate: {
                  type: 'string',
                  format: 'date-time',
                  description: '下单时间, 新增不传',
              },
              employeeId: {
                  type: 'integer',
                  format: 'int64',
                  description: '业务员id, 新增不传',
              },
              employeeName: {
                  type: 'string',
                  description: '业务员名称, 新增不传',
              },
              id: {
                  type: 'integer',
                  format: 'int64',
                  description: '新增不传',
              },
              mobile: {
                  type: 'string',
                  description: '手机号，新增不传',
              },
              nickname: {
                  type: 'string',
                  description: '用户昵称，新增不传',
              },
              orderNo: {
                  type: 'string',
                  description: '订单号, 新增不传',
              },
              paymentId: {
                  type: 'integer',
                  format: 'int64',
                  description: '付款信息id, 新增不传',
              },
              paymentNo: {
                  type: 'string',
                  description: '支付单号, 新增不传',
              },
              paymentPrice: {
                  type: 'number',
                  format: 'double',
                  description: '付款金额, 新增不传',
              },
              paymentSource: {
                  type: 'integer',
                  format: 'int32',
                  description: '付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传',
              },
              paymentTime: {
                  type: 'string',
                  format: 'date-time',
                  description: '支付时间, 新增不传',
              },
              productId: {
                  type: 'integer',
                  format: 'int64',
                  description: '商品id',
              },
              productImg: {
                  type: 'string',
                  description: '商品图片, 新增不传',
              },
              productName: {
                  type: 'string',
                  description: '商品名称, 新增不传',
              },
              productPrice: {
                  type: 'number',
                  format: 'double',
                  description: '商品价格, 新增不传',
              },
              purchaseFrom: {
                  type: 'string',
                  description: '渠道',
              },
              remark: {
                  type: 'string',
                  description: '关闭原因, 新增不传',
              },
              status: {
                  type: 'integer',
                  format: 'int32',
                  description: '订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭',
              },
          },
          title: '订单',
      },
  },
};
