import request from '@/utils/http'
//订单接口
export const getCheckInfoAPI=()=>{
    return request({
        url:'/member/order/pre'
    })
}