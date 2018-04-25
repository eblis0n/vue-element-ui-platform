<template>
  <el-container class="layout-container">
    <el-header class="layout-header">J.A.R.V.I.S.</el-header>
    <el-container class="main" :class="{ 'hide-sidebar' : isCollapse }">
      <el-aside class="sidebar">
        <el-scrollbar style="height:calc(100% + 17px);">
          <app-nav :isCollapse="isCollapse"></app-nav>
        </el-scrollbar>
      </el-aside>
      <el-container class="is-vertical main-container">
        <el-header class="top-nav" height="50px">
          <i class="fa fa-bars icon-collapse-switch" v-on:click="isCollapse = ! isCollapse"></i>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>首页</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-scrollbar class="main-scrollbar" :native="false" tag="section" wrapClass="scrollbar-wrap" wrapStyle="color:#333" viewClass="scrollbar-view" viewStyle="color:#333" :noresize="true">
          <router-view></router-view>
        </el-scrollbar>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import scrollbarWidth from 'element-ui/src/utils/scrollbar-width';
import Nav from '@/components/layout/Nav';
export default {
  data() {
    return {
      isCollapse: false,
      scrollbarWidth: scrollbarWidth()
    }
  },
  components: {
    'app-nav': Nav
  },
  computed: {
  }
}
</script>
<style>
.layout-container{
  height:100%;
}
.layout-header{
  background: #384058;
  color:#eee;
  line-height: 60px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height:400px;
}
.el-menu{
  border-right: 0 none;
}
.main{
  position: relative;
  height: calc(100% - 60px);
}
.main .sidebar{
  width: 220px!important;
  height: 100%;
  overflow: hidden;
}
.sidebar{
  border-right: 1px solid rgba(0,0,0,.07);
  transition: width .2s ease-out;
}
.main .main-container {
  /*margin-left: 220px;*/
  transition: all .2s ease;
  -webkit-transition: all .2s ease;
}
.main .icon-collapse-switch{
  margin: 0 5px;
  width: 1em;
  text-align: center;
  font-size: 1em;
  color: #909399;
  transition: transform .2s ease;
  cursor: pointer;
}
.main.hide-sidebar .sidebar{
  width: 36px!important;
}
.main.hide-sidebar .icon-collapse-switch{
  transform: rotate(90deg);
}
.main.hide-sidebar .el-submenu__title,
.main.hide-sidebar .el-menu-item,
.main.hide-sidebar .el-tooltip{
  padding: 0 10px!important;
}
.el-main {
  padding: 0;
}
.top-nav{
  height: 50px;
  padding: 0 5px;
  line-height: 50px;
  border: 0 none;
  border-bottom: 1px solid #f2f2f2;
}
.el-breadcrumb{
  display: inline-block;
}

.main-scrollbar{
  flex: 1;
  position: relative;
}
.scrollbar-wrap{
  /*解决父级为 flex:1; 时，子元素的 height:100%; 不生效的问题：
    一、设父级为 position:relative; 
    二、子元素设为 position:absolute; 并设置width:100; 则height生效 */
  position: absolute;
  width: calc(100% + 17px);
  height: calc(100% + 17px);
}

</style>