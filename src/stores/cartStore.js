//封装购物车模块
import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useCartStore=defineStore('cart',()=>{
    //定义state-cartList
    const cartList=ref([])
    //定义action-addCart
    const addCart=(goods)=>{
        //添加购物车操作
        //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item=cartList.value.find((item)=>goods.skuId===item.skuId)
        if(item){
            item.count++
        }else{
            cartList.value.push(goods)
        }
    }
    return{
        cartList,
        addCart
    }
},{
    persist:true,
}
)