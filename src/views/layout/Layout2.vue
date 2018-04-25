<template>
  <el-container style="height:100%">
    <el-header style="background-color:#42a0e2">Header</el-header>
    <el-container>
      <el-aside :width="asideWidth" class="aside">
        <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="0">
            <i class="fa fa-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main-css">
        <div class="main-header">
          <i class="fa fa-align-center open-icon" :class="{'active' : isCollapse}" v-on:click="open"></i>
          <el-breadcrumb separator="/" class="el-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main-dev1">
          <div class="main-dev2">
            <router-view></router-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      asideWidth: '200px',
      isCollapse: false,
      defaultActive: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    open () {
      this.isCollapse = !this.isCollapse
      this.asideWidth = this.isCollapse ? '50px' : '200px'
      this.defaultActive = '1-3'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-css{
  display: flex;
  flex-direction: column;
}
.main-dev1{
  flex: 1;
  overflow: hidden;
}
.main-dev2{
  height: 100%;
  overflow-y: scroll;
}
.open-icon{
  transition: all .2s ease;
  -webkit-transition: all .2s ease;
}
.open-icon.active{
  transform:rotate(90deg);
}
.el-main{
  padding: 0
}
.main-header{
  height: 50px;
  line-height: 50px;
  margin: 0 10px;
  border-bottom: 1px solid #d4d4d4
}
.aside{
  border-right: 1px solid #d4d4d4
}
.el-breadcrumb{
  display: inline-block
}
.el-menu-item [class^=fa]{
  vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
          }
html,body,#app {
  height: 100%;
}
</style>
