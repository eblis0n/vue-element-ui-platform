<template>
  <section>
    <header>
      <section class="logo">
        <a href="/">首页</a>
      </section>
    </header>
    <section class="login-bg">
      <a href="/"></a>
      <div class="wrapper">
        <div class="layout">
          <div class="title">
            <a href="/">账号登录</a>
          </div>
          <div class="login-area">
            
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
header,.wrapper{
  width:1130px;
  margin: 0 auto;
}
.logo{
  width: 200px;
  height: 98px;
  background: url('https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png') no-repeat;
}
.logo a{
  display: block;
  height: 98px;
  text-indent: -9999em;
}
.login-bg{
  width: 100%;
  height: 588px;
  position: absolute;
  left: 0;
  top: 98px;
  background-repeat: no-repeat;
  background-position: top center;
  background: #F2E5D2;
}
.login-bg>a{
  position: absolute;
  width: 100%;
  display: block;
  height: 588px;
  text-indent: -9999em;
}
.layout{
  background-color: #fff;
  margin: 32px auto 20px;
  position: relative;
  width: 410px;
  min-height: 524px;
  margin-bottom: 0;
  margin-right: 0;
  font-size: 14px;
  z-index: 4;
}
.title{
  padding: 27px 0 24px;
  text-align: center;
  font-size: 24px;
  color: #e0e0e0;
}
a{
  color: #666;
}
.login-area{
  width: 348px;
  margin: 0 auto;
  padding-bottom: 0;
}
</style>
