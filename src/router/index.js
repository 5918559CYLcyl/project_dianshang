import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path:'/',
      component:Layout,//首页
      children:[
        {
          path:'',
          component:Home//home是默认渲染页，path置空
        },
        {
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:SubCategory
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }
    
      
  ],
  //路由每次跳转后回到顶部而不是之前位置
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router