import request from '@/utils/http'

export function findTopCategoryAPI(id){
    return request({
        url:'/category',
        params:{
            id
        }
    })
}