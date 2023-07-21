import httpInstance from '@/utils/http'

//获取banner
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
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