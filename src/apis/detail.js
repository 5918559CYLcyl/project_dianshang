import request from '@/utils/http'

//详情接口封装
export const getDetail=(id)=>{
    return request({
        url:'/goods',
        params:{
            id
        }
    })
}