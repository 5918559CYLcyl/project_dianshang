import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'//引入路由

//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载在指令并注册
import {lazyPlugin} from '@/directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
//定义全局指令


    
  
    
