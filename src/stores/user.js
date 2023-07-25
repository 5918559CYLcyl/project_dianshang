//管理用户数据相关pinia
import {defineStore} from 'pinia'
import {ref} from 'vue'
import {loginAPI} from '@/apis/user'
export const useUserStore=defineStore('user',()=>{
    //定义用户管理的state
    const userInfo=ref({})
    //定义获取数据的action
    const getUserInfo=async({account,password})=>{
        const res=await loginAPI({account,password})
        userInfo.value=res.result
    }
    //退出清除用户信息
    const clearUserInfo=()=>{
        userInfo.value={}
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