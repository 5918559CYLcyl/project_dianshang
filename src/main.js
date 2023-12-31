import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'//引入路由

//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载在指令并注册
import {lazyPlugin} from '@/directives'
//引入全局组件插件
import {componentPlugin} from '@/components'
const app = createApp(App)
const pinia=createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
// app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
//定义全局指令


    
  
    
