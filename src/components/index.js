//把components中所有组件进行全局注册
//通过插件方式
import imageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin={
    install(app){
        //app.component('组件名字',组件配置对象)
        app.component('XtxImageView',imageView)
        app.component('XtxSku',Sku)
    }
}