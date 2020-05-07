<template>
  <!-- 底部导航 -->
    <div class="bottomNav">
      <router-link to="/index">首页</router-link>
      <router-link to="/cateList">分类</router-link>
      <router-link to="/recommend">推荐</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/personal">个人</router-link>
    </div>
</template>

<script>
  export default {
    name:"bottomTabBar",
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus">
/* 底部导航样式 */
    .bottomNav
      position absolute
      bottom 0
      display flex
      justify-content  space-around
      width 100%
      height 162.44px
      line-height 162.44px
      background #f5f5f5
 
</style>
