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

export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return request({
      url:'/goods/hot',
      params:{
        id, 
        type, 
        limit
      }
    })
  }