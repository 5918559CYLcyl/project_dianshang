//封装分类数据业务相关代码
import {findTopCategoryAPI} from '@/apis/category'
import {useRoute} from 'vue-router'
import {onBeforeRouteUpdate} from 'vue-router'
import {ref,onMounted} from 'vue'
export function useCategory(){
    const categoryData=ref({})
    const route=useRoute()//获取路由参数
    const getCategory=async(id=route.params.id)=>{//不传以默认为主
    const res=await findTopCategoryAPI(id)
    categoryData.value=res.result
}
onMounted(()=>getCategory())
//目标：路由参数变化时，把分类数据接口重新发送
onBeforeRouteUpdate((to)=>{
    // console.log('路由变化了')
    //问题：使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id)//传了以此为主
})
return{
    categoryData
}
}