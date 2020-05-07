<template>
  <div class="indexContainer">
    <!-- 头部 -->
    <div class="header">
      <span href="#" class="logo"></span>
      <div class="topInput">
        <i class="iconfont">&#xe63e;</i>
        <span class="placeholder">搜索商品，共25344款好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>

    <!-- 导航栏 -->
    <div class="nav">
      <!-- 滑块容器 -->
      <div class="navScrollWrap">
        <!-- 滑块 -->
        <ul class="navScroll">
          <li>啊啊</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  // import BScroll from "better-scroll"
  export default {
    data () {
      return {

      }
    },
    components: {
    },
    mounted(){

    }
  }
</script>

<style lang="stylus">
.indexContainer
  width 100%
  height 100%
  .header
    display flex
    align-items center
    padding 26.5212px 49.728px
    .logo
      width 228.74px
      height 66.3px
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)
      background-size 228.74px
      margin-right 33.1534px
    .topInput
      width 732.96px
      height 92.82px
      background-color #ededed
      border-radius 13.26px
      font-size 46.4124px
      color #666666
      text-align center
      line-height 92.82px
      .i
        font-family 'iconfont'
      .placeholder
        display inline
    .loginBtn
      width 122.66px
      height 66.3px
      margin-left 26.5212px
      border 1px solid #DD1A21
      color #DD1A21
      border-radius 13.2605px
      text-align center
      font-size 39.7824px
      line-height 66.3px

  // 导航条
  .scrollWrap
    width 100%
    height 22px
    background green


</style>
