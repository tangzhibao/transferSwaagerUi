
/**
 * 
 * @api {get} /api/web/employees 业务员列表
 * @apiDescription 业务员列表
 * @apiVersion 1.1.0
 * @apiName getAllEmployeesUsingGET
 * @apiGroup 业务员管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {string} statusStr undefined
    * @apiParam {number} status 0下线 1上线, 新增不传
    * @apiParam {string} region 地区
    * @apiParam {number} orderTotal 跟踪订单总数
    * @apiParam {number} orderOngoing 跟踪中订单, 新增不传
    * @apiParam {number} orderFinish 已完成订单, 新增不传
    * @apiParam {string} name 名称
    * @apiParam {string} mobile 手机号
    * @apiParam {number} id 新增不传
    * @apiParam {number} page 查询页码
    * @apiParam {number} size 分页大小
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/employees 新增业务员
 * @apiDescription 新增业务员
 * @apiVersion 1.1.0
 * @apiName createEmployeeUsingPOST
 * @apiGroup 业务员管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [employeeDTO] employeeDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {put} /api/web/employees 更新业务员
 * @apiDescription 更新业务员
 * @apiVersion 1.1.0
 * @apiName updateEmployeeUsingPUT
 * @apiGroup 业务员管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [employeeDTO] employeeDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/employees/excel 业务员列表-导出excel
 * @apiDescription 业务员列表-导出excel
 * @apiVersion 1.1.0
 * @apiName downloadExcelUsingGET
 * @apiGroup 业务员管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {string} statusStr undefined
    * @apiParam {number} status 0下线 1上线, 新增不传
    * @apiParam {string} region 地区
    * @apiParam {number} orderTotal 跟踪订单总数
    * @apiParam {number} orderOngoing 跟踪中订单, 新增不传
    * @apiParam {number} orderFinish 已完成订单, 新增不传
    * @apiParam {string} name 名称
    * @apiParam {string} mobile 手机号
    * @apiParam {number} id 新增不传
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {patch} /api/web/employees/status 业务员上下架
 * @apiDescription id和status 0下架 1上架
 * @apiVersion 1.1.0
 * @apiName changeStatusUsingPATCH
 * @apiGroup 业务员管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [employeeDTO] employeeDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/employees/{id} 通过id业务员
 * @apiDescription 通过id业务员
 * @apiVersion 1.1.0
 * @apiName getEmployeeUsingGET
 * @apiGroup 业务员管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [id] id
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/files 文件上传
 * @apiDescription 文件上传
 * @apiVersion 1.1.0
 * @apiName webUploadUsingPOST
 * @apiGroup 文件上传 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {array} [files] files
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/mobile-users 用户列表
 * @apiDescription 用户列表
 * @apiVersion 1.1.0
 * @apiName getAllMobileUsersUsingGET
 * @apiGroup 用户 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {string} registerFrom 注册方式
    * @apiParam {string} openId undefined
    * @apiParam {string} nickname 昵称
    * @apiParam {string} mobile 手机号
    * @apiParam {number} id undefined
    * @apiParam {string} createdDate 注册时间
    * @apiParam {string} costStr undefined
    * @apiParam {number} cost 消费金额
    * @apiParam {string} avatar 头像
    * @apiParam {number} page 查询页码
    * @apiParam {number} size 分页大小
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/mobile-users/excel 用户列表-导出excel
 * @apiDescription 用户列表-导出excel
 * @apiVersion 1.1.0
 * @apiName downloadExcelUsingGET_1
 * @apiGroup 用户 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {string} registerFrom 注册方式
    * @apiParam {string} openId undefined
    * @apiParam {string} nickname 昵称
    * @apiParam {string} mobile 手机号
    * @apiParam {number} id undefined
    * @apiParam {string} createdDate 注册时间
    * @apiParam {string} costStr undefined
    * @apiParam {number} cost 消费金额
    * @apiParam {string} avatar 头像
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/mobile-users/{id} 通过id获取用户详情
 * @apiDescription 通过id获取用户详情
 * @apiVersion 1.1.0
 * @apiName getMobileUserUsingGET_1
 * @apiGroup 用户 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [id] id
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/navigations 导航列表
 * @apiDescription 导航列表
 * @apiVersion 1.1.0
 * @apiName getAllNavigationsUsingGET_1
 * @apiGroup 导航 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/navigations 新增导航
 * @apiDescription 新增导航
 * @apiVersion 1.1.0
 * @apiName createNavigationUsingPOST
 * @apiGroup 导航 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [navigationDTO] navigationDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {put} /api/web/navigations 更新导航
 * @apiDescription 更新导航
 * @apiVersion 1.1.0
 * @apiName updateNavigationUsingPUT
 * @apiGroup 导航 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [navigationDTO] navigationDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {patch} /api/web/navigations/sequence 排序
 * @apiDescription 传id1, id2
 * @apiVersion 1.1.0
 * @apiName changeSequenceUsingPATCH
 * @apiGroup 导航 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [map] map
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/navigations/{id} 根据id获取导航
 * @apiDescription 根据id获取导航
 * @apiVersion 1.1.0
 * @apiName getNavigationUsingGET
 * @apiGroup 导航 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [id] id
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {delete} /api/web/navigations/{id} 根据id删除导航
 * @apiDescription 根据id删除导航
 * @apiVersion 1.1.0
 * @apiName deleteNavigationUsingDELETE
 * @apiGroup 导航 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [id] id
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/orders 订单列表
 * @apiDescription 订单列表
 * @apiVersion 1.1.0
 * @apiName getAllOrdersUsingGET_1
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} status 订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭
    * @apiParam {string} remark 关闭原因, 新增不传
    * @apiParam {string} purchaseFrom 渠道
    * @apiParam {number} productPrice 商品价格, 新增不传
    * @apiParam {string} productName 商品名称, 新增不传
    * @apiParam {string} productImg 商品图片, 新增不传
    * @apiParam {number} productId 商品id
    * @apiParam {string} paymentTime 支付时间, 新增不传
    * @apiParam {number} paymentSource 付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传
    * @apiParam {number} paymentPrice 付款金额, 新增不传
    * @apiParam {string} paymentNo 支付单号, 新增不传
    * @apiParam {number} paymentId 付款信息id, 新增不传
    * @apiParam {string} orderStatus undefined
    * @apiParam {string} orderNo 订单号, 新增不传
    * @apiParam {string} nickname 用户昵称，新增不传
    * @apiParam {number} mobileUserId undefined
    * @apiParam {string} mobile 手机号，新增不传
    * @apiParam {number} id 新增不传
    * @apiParam {string} employeeName 业务员名称, 新增不传
    * @apiParam {number} employeeId 业务员id, 新增不传
    * @apiParam {string} createdDate 下单时间, 新增不传
    * @apiParam {number} couponPrice 优惠金额
    * @apiParam {number} couponId 优惠券id
    * @apiParam {string} couponCode 优惠码, 新增不传
    * @apiParam {number} page 查询页码
    * @apiParam {number} size 分页大小
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {patch} /api/web/orders 更改订单状态
 * @apiDescription id和status
 * @apiVersion 1.1.0
 * @apiName updateOrderUsingPATCH
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [orderDTO] orderDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/orders/contracts/{contractId} 废除原合同, 发起补签
 * @apiDescription 废除原合同, 发起补签
 * @apiVersion 1.1.0
 * @apiName createContractUsingPOST
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [contractId] contractId
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/orders/emergency 紧急订单列表
 * @apiDescription 紧急订单列表
 * @apiVersion 1.1.0
 * @apiName getEmergencyOrdersUsingGET
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} status 订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭
    * @apiParam {string} remark 关闭原因, 新增不传
    * @apiParam {string} purchaseFrom 渠道
    * @apiParam {number} productPrice 商品价格, 新增不传
    * @apiParam {string} productName 商品名称, 新增不传
    * @apiParam {string} productImg 商品图片, 新增不传
    * @apiParam {number} productId 商品id
    * @apiParam {string} paymentTime 支付时间, 新增不传
    * @apiParam {number} paymentSource 付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传
    * @apiParam {number} paymentPrice 付款金额, 新增不传
    * @apiParam {string} paymentNo 支付单号, 新增不传
    * @apiParam {number} paymentId 付款信息id, 新增不传
    * @apiParam {string} orderStatus undefined
    * @apiParam {string} orderNo 订单号, 新增不传
    * @apiParam {string} nickname 用户昵称，新增不传
    * @apiParam {number} mobileUserId undefined
    * @apiParam {string} mobile 手机号，新增不传
    * @apiParam {number} id 新增不传
    * @apiParam {string} employeeName 业务员名称, 新增不传
    * @apiParam {number} employeeId 业务员id, 新增不传
    * @apiParam {string} createdDate 下单时间, 新增不传
    * @apiParam {number} couponPrice 优惠金额
    * @apiParam {number} couponId 优惠券id
    * @apiParam {string} couponCode 优惠码, 新增不传
    * @apiParam {number} page 查询页码
    * @apiParam {number} size 分页大小
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/orders/emergency/excel 紧急订单列表-导出excel
 * @apiDescription 紧急订单列表-导出excel
 * @apiVersion 1.1.0
 * @apiName downloadEmergencyExcelUsingGET
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} status 订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭
    * @apiParam {string} remark 关闭原因, 新增不传
    * @apiParam {string} purchaseFrom 渠道
    * @apiParam {number} productPrice 商品价格, 新增不传
    * @apiParam {string} productName 商品名称, 新增不传
    * @apiParam {string} productImg 商品图片, 新增不传
    * @apiParam {number} productId 商品id
    * @apiParam {string} paymentTime 支付时间, 新增不传
    * @apiParam {number} paymentSource 付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传
    * @apiParam {number} paymentPrice 付款金额, 新增不传
    * @apiParam {string} paymentNo 支付单号, 新增不传
    * @apiParam {number} paymentId 付款信息id, 新增不传
    * @apiParam {string} orderStatus undefined
    * @apiParam {string} orderNo 订单号, 新增不传
    * @apiParam {string} nickname 用户昵称，新增不传
    * @apiParam {number} mobileUserId undefined
    * @apiParam {string} mobile 手机号，新增不传
    * @apiParam {number} id 新增不传
    * @apiParam {string} employeeName 业务员名称, 新增不传
    * @apiParam {number} employeeId 业务员id, 新增不传
    * @apiParam {string} createdDate 下单时间, 新增不传
    * @apiParam {number} couponPrice 优惠金额
    * @apiParam {number} couponId 优惠券id
    * @apiParam {string} couponCode 优惠码, 新增不传
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {patch} /api/web/orders/employee 指派业务员
 * @apiDescription id和employeeId
 * @apiVersion 1.1.0
 * @apiName setEmployeeUsingPATCH
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [orderDTO] orderDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/orders/excel 订单列表-导出excel
 * @apiDescription 订单列表-导出excel
 * @apiVersion 1.1.0
 * @apiName downloadExcelUsingGET_2
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} status 订单状态, 新增不传 1:待支付, 2:服务中/未审核 3:服务中/已审核 4:保障中 5:已关闭
    * @apiParam {string} remark 关闭原因, 新增不传
    * @apiParam {string} purchaseFrom 渠道
    * @apiParam {number} productPrice 商品价格, 新增不传
    * @apiParam {string} productName 商品名称, 新增不传
    * @apiParam {string} productImg 商品图片, 新增不传
    * @apiParam {number} productId 商品id
    * @apiParam {string} paymentTime 支付时间, 新增不传
    * @apiParam {number} paymentSource 付款来源, 0微信h5 1微信JSAPI 2支付宝, 新增不传
    * @apiParam {number} paymentPrice 付款金额, 新增不传
    * @apiParam {string} paymentNo 支付单号, 新增不传
    * @apiParam {number} paymentId 付款信息id, 新增不传
    * @apiParam {string} orderStatus undefined
    * @apiParam {string} orderNo 订单号, 新增不传
    * @apiParam {string} nickname 用户昵称，新增不传
    * @apiParam {number} mobileUserId undefined
    * @apiParam {string} mobile 手机号，新增不传
    * @apiParam {number} id 新增不传
    * @apiParam {string} employeeName 业务员名称, 新增不传
    * @apiParam {number} employeeId 业务员id, 新增不传
    * @apiParam {string} createdDate 下单时间, 新增不传
    * @apiParam {number} couponPrice 优惠金额
    * @apiParam {number} couponId 优惠券id
    * @apiParam {string} couponCode 优惠码, 新增不传
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/orders/home-page 订单首页
 * @apiDescription 订单首页
 * @apiVersion 1.1.0
 * @apiName getHomePageUsingGET
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} page 查询页码
    * @apiParam {number} size 分页大小
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/orders/pay/aliPayment aliPayNotify
 * @apiDescription undefined
 * @apiVersion 1.1.0
 * @apiName aliPayNotifyUsingPOST
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/orders/pay/test-contract 测试合同接口
 * @apiDescription 测试合同接口
 * @apiVersion 1.1.0
 * @apiName testContractUsingPOST
 * @apiGroup 云合同测试 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {file} [signFile] signFile
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/orders/pay/test-real 测试实名验证
 * @apiDescription 测试实名验证
 * @apiVersion 1.1.0
 * @apiName testRealNameUsingPOST
 * @apiGroup 云合同测试 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/orders/pay/upload-seal 上传自定义印章
 * @apiDescription 上传自定义印章
 * @apiVersion 1.1.0
 * @apiName uploadSealUsingPOST
 * @apiGroup 云合同测试 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {file} [signFile] signFile
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/orders/pay/wxPayment wxPayNotify
 * @apiDescription undefined
 * @apiVersion 1.1.0
 * @apiName wxPayNotifyUsingPOST
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {put} /api/web/orders/user-infos 更新用户档案
 * @apiDescription 更新用户档案
 * @apiVersion 1.1.0
 * @apiName updateUserInfoUsingPUT
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [userInfoDTO] userInfoDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/orders/user-infos/regions 获取地区列表
 * @apiDescription 获取地区列表
 * @apiVersion 1.1.0
 * @apiName getAllRegionsUsingGET
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/orders/{id} 根据id获取订单详情
 * @apiDescription 根据id获取订单详情
 * @apiVersion 1.1.0
 * @apiName getOrderUsingGET_1
 * @apiGroup 订单管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [id] id
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/products 商品列表
 * @apiDescription 商品列表
 * @apiVersion 1.1.0
 * @apiName getAllProductsUsingGET_1
 * @apiGroup 商品 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} yangMo 羊膜
    * @apiParam {number} taiPai 胎盘
    * @apiParam {number} storeYear 储存年限
    * @apiParam {number} status 0:下架 1:上架 新增不传
    * @apiParam {number} sort 新增不传
    * @apiParam {number} qidai 脐带
    * @apiParam {string} productPics[0].url 图片链接
    * @apiParam {number} productPics[0].sort 新增不传
    * @apiParam {number} productPics[0].productId 商品id
    * @apiParam {number} productPics[0].id 新增不传
    * @apiParam {number} price 价格
    * @apiParam {string} name 名称
    * @apiParam {string} lastModifiedDate 新增不传
    * @apiParam {string} info 套餐详情
    * @apiParam {string} imgUrl 主图
    * @apiParam {number} id 新增不传
    * @apiParam {string} feature 产品特色
    * @apiParam {string} description 服务说明
    * @apiParam {number} page 查询页码
    * @apiParam {number} size 分页大小
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/products 创建商品
 * @apiDescription 创建商品
 * @apiVersion 1.1.0
 * @apiName createProductUsingPOST
 * @apiGroup 商品 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [productDTO] productDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {put} /api/web/products 更新商品
 * @apiDescription 更新商品
 * @apiVersion 1.1.0
 * @apiName updateProductUsingPUT
 * @apiGroup 商品 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [productDTO] productDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {patch} /api/web/products/product-pics/sequence 商品图片排序
 * @apiDescription 传id1, id2
 * @apiVersion 1.1.0
 * @apiName changePicSequenceUsingPATCH
 * @apiGroup 商品 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [map] map
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {patch} /api/web/products/sequence 商品排序
 * @apiDescription 传id1, id2
 * @apiVersion 1.1.0
 * @apiName changeSequenceUsingPATCH_1
 * @apiGroup 商品 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [map] map
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {patch} /api/web/products/status 商品上下架
 * @apiDescription id和status 0下架 1上架
 * @apiVersion 1.1.0
 * @apiName changeStatusUsingPATCH_1
 * @apiGroup 商品 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [productDTO] productDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/products/{id} 根据id获取商品
 * @apiDescription 根据id获取商品
 * @apiVersion 1.1.0
 * @apiName getProductUsingGET_1
 * @apiGroup 商品 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [id] id
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/sales 优惠码活动列表
 * @apiDescription 优惠码活动列表
 * @apiVersion 1.1.0
 * @apiName getAllSalesUsingGET
 * @apiGroup 营销管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} status 0:下线 1:上线 新增不传
    * @apiParam {array} products 适用产品id
    * @apiParam {string} name 名称
    * @apiParam {number} minusMoney 立减
    * @apiParam {number} id 新增不传
    * @apiParam {string} endTime 结束时间
    * @apiParam {string} beginTime 开始时间
    * @apiParam {number} page 查询页码
    * @apiParam {number} size 分页大小
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/sales 创建优惠码活动
 * @apiDescription 创建优惠码活动
 * @apiVersion 1.1.0
 * @apiName createSalesUsingPOST
 * @apiGroup 营销管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [salesDTO] salesDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {put} /api/web/sales 更新优惠码活动
 * @apiDescription 更新优惠码活动
 * @apiVersion 1.1.0
 * @apiName updateSalesUsingPUT
 * @apiGroup 营销管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [salesDTO] salesDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/sales/coupons 优惠码列表
 * @apiDescription salesId必传
 * @apiVersion 1.1.0
 * @apiName getAllCouponsUsingGET
 * @apiGroup 营销管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {string} statusStr undefined
    * @apiParam {number} status 0未核销 1已核销
    * @apiParam {string} salesName 活动标题
    * @apiParam {number} salesId undefined
    * @apiParam {string} orderNo 订单号
    * @apiParam {string} nickname 昵称
    * @apiParam {number} mobileUserId undefined
    * @apiParam {string} mobile 手机号
    * @apiParam {string} lastModifiedDate 使用时间
    * @apiParam {number} id undefined
    * @apiParam {string} code 兑换码
    * @apiParam {number} page 查询页码
    * @apiParam {number} size 分页大小
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/sales/coupons/excel 优惠码列表-导出excel
 * @apiDescription 优惠码列表-导出excel;salesId必传
 * @apiVersion 1.1.0
 * @apiName downloadExcelUsingGET_3
 * @apiGroup 营销管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {string} statusStr undefined
    * @apiParam {number} status 0未核销 1已核销
    * @apiParam {string} salesName 活动标题
    * @apiParam {number} salesId undefined
    * @apiParam {string} orderNo 订单号
    * @apiParam {string} nickname 昵称
    * @apiParam {number} mobileUserId undefined
    * @apiParam {string} mobile 手机号
    * @apiParam {string} lastModifiedDate 使用时间
    * @apiParam {number} id undefined
    * @apiParam {string} code 兑换码
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {patch} /api/web/sales/status 优惠码活动上下架
 * @apiDescription id和status 0下架 1上架
 * @apiVersion 1.1.0
 * @apiName changeStatusUsingPATCH_2
 * @apiGroup 营销管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {object} [salesDTO] salesDTO
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {get} /api/web/sales/{id} 根据id获取优惠码活动
 * @apiDescription 根据id获取优惠码活动
 * @apiVersion 1.1.0
 * @apiName getSalesUsingGET
 * @apiGroup 营销管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [id] id
 * 
 * undefined
 * 
 */
    
/**
 * 
 * @api {post} /api/web/sales/{salesId}/coupons/{amount} 根据活动id生成优惠码
 * @apiDescription 每次最多生成1000条
 * @apiVersion 1.1.0
 * @apiName generateCouponUsingPOST
 * @apiGroup 营销管理 
 * 
 * 
    * @apiHeader {string} authorization bearer token
 * 
    * @apiParam {number} [salesId] salesId
    * @apiParam {number} [amount] amount
 * 
 * undefined
 * 
 */
    