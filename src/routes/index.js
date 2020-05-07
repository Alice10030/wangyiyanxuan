import index from "@/pages/index/index.vue"
import cateList from "@/pages/cateList/cateList.vue"
import recommend from "@/pages/recommend/recommend.vue"
import cart from "@/pages/cart/cart.vue"
import personal from "@/pages/personal/personal.vue"
export default[
  {path:"/index",component:index},
  {path:"/cateList",component:cateList},
  {path:"/recommend",component:recommend},
  {path:"/cart",component:cart},
  {path:"/personal",component:personal},
  {path:"",component:index}
]