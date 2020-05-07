<template>
  <div id="app">
    <router-view></router-view>
    <bottomTabBar></bottomTabBar>
  </div>
</template>

<script>
import bottomTabBar from "@/components/bottomTabBar/bottomTabBar.vue"
  // import index from "./pages/index/index"
  // import cateList from "./pages/cateList/cateList"
  // import recommend from "./pages/recommend/recommend"
  // import cart from "./pages/cart/cart"
  export default {
    name: 'App',
    components: {
      bottomTabBar
      // index,
      // cateList,
      // recommend,
      // cart
    }
  }
</script>

<style lang="stylus">
  @import url("./static/font/iconfont.styl")
  #app
    position relative
    width 100%
    height 100%
  
</style>
