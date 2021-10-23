import service from '@/utils/request'

// @Tags Operations
// @Summary 删除Operations
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Operations true "删除Operations"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /operations/deleteOperations [delete]
export const deleteOperations = (data) => {
  return service({
    url: '/operations/deleteOperations',
    method: 'delete',
    data
  })
}

// @Tags Operations
// @Summary 删除Operations
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "删除Operations"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /operations/deleteOperations [delete]
export const deleteOperationsByIds = (data) => {
  return service({
    url: '/operations/deleteOperationsByIds',
    method: 'delete',
    data
  })
}

// @Tags Operations
// @Summary 分页获取Operations列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.PageInfo true "分页获取Operations列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /operations/getOperationsList [get]
export const getOperationsList = (params) => {
  return service({
    url: '/operations/getOperationsList',
    method: 'get',
    params
  })
}
