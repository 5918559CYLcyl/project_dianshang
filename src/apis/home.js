import httpInstance from '@/utils/http'

//获取banner
export function getBannerAPI(params={}){
    //默认为1，商品为2
    const {distributionSite='1'}=params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }
    })
}

//新鲜好物接口
export function findNewAPI(){
    return httpInstance({
        url:'/home/new'
    })
}

//人气模块
export function getHotAPI(){
    return  httpInstance(
        {
            url:'/home/hot'
        }
    )
  }
//获取所有商品
  export function getGoodsAPI(){
    return  httpInstance(
        {
            url:'/home/goods'
        }
    )
  }