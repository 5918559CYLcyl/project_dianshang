//管理用户数据相关pinia
import {defineStore} from 'pinia'
import {ref} from 'vue'
import {loginAPI} from '@/apis/user'
import {useCartStore}from './cartStore'
import {mergeCartAPI} from '@/apis/cart'
export const useUserStore=defineStore('user',()=>{
    const cartStore=useCartStore()
    //定义用户管理的state
    const userInfo=ref({})
    //定义获取数据的action
    const getUserInfo=async({account,password})=>{
        const res=await loginAPI({account,password})
        userInfo.value=res.result
        //合并购物车
        await mergeCartAPI(cartStore.cartList.map(item=>{
            return{
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        cartStore.updateNewList()
    }
    //退出清除用户信息
    const clearUserInfo=()=>{
        userInfo.value={}
        //执行清楚购物车action
        cartStore.clearCart()
    }

    //一对象形式把state\action  return 出去
    return{
        userInfo,
        getUserInfo,
        clearUserInfo

    }
},{
        persist:true,
    }
    
)