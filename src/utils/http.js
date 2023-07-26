import axios from 'axios'
import { ElMessage } from 'element-plus'
import {useUserStore} from '@/stores/userStore'
import router from '@/router'
import 'element-plus/theme-chalk/el-message.css'
const httpInstance=axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})
//拦截器:1. 实例化 - baseURL + timeout
//  拦截器 - 携带token 401拦截等
//拦截器里配置token，很多接口都需要token,一次配置都可生效。
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1.从pinia获取token数据
  const userStore=useUserStore()
  // 2.按后端要求拼接token数据
  const token=userStore.userInfo.token
  if(token){
        config.headers.Authorization=`Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore=useUserStore()
  //统一错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  //401token失效处理
  //1.清除本地数据，跳转到登录页
  if(e.response.status===401){
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})

export default httpInstance
