//封装购物车模块
import {defineStore} from 'pinia'
import {ref,computed} from 'vue'

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
//删除购物车
    const delCart=(skuId)=>{
        //思路：1.找到要删除下标值-splice
        // 2.使用数组的过滤方法--filter
        const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
        cartList.value.splice(idx,1)
    }
//单选功能singlecheck
const singleCheck=(skuId,selected)=>{
    const item=cartList.value.find((item)=>item.skuId===skuId)
    item.selected=selected
}
//计算属性（总数量、总价格)
const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
//是否全选isAll
const isAll=computed(()=>cartList.value.every((item)=>item.selected))
//全选功能
const allCheck=(selected)=>{
    cartList.value.forEach(item=>item.selected=selected)
}
    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck
    }
},{
    persist:true,
}
)