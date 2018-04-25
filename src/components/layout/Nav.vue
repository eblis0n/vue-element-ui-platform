<template>
  <el-menu default-active="$router.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapse">
    <!-- 没有子菜单的导航 -->
    <el-menu-item v-for="(item, index) in oldNavList" :key="index" v-if="item.children.length<=0" :index="item.path">
      <i :class="item.icon"></i>
      <span slot="title">{{item.text}}</span>
    </el-menu-item>
    <!-- 有子菜单的导航 -->
    <el-submenu v-for="(item, index) in oldNavList" :key="item.path" v-if="item.children.length>0" :index="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{item.text}}</span>
      </template>
      <!-- 没有分组 -->
      <el-menu-item v-for="(child, index) in item.children" :key="child.path" :index="child.path"><i :class="child.icon || 'fa fa-tag'"></i>{{child.text}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  },
  data () {
    return {
      navList: [
        {
          path: '/',
          text: '首页',
          icon: 'fa fa-home',
          children: []
        },
        {
          path: '/promote',
          text: '活动',
          icon: 'fa fa-bullhorn',
          children: [
            {
              path: '/promote/promotelist',
              text: '活动列表',
              icon: 'fa fa-bullhorn'
            },
            {
              path: '/promote/prize',
              text: '中奖列表',
              icon: 'fa fa-bullhorn'
            },
            {
              path: '/promote/drawlist',
              text: '提取列表',
              icon: ''
            }
          ]
        },
        {
          path: '/coffee',
          text: '咖啡',
          icon: 'fa fa-coffee',
          children: [
            {
              path: '/coffee/categorylist',
              text: '类别列表',
              icon: ''
            }
          ]
        }
      ],
      oldNavList: [
        {
          "id":64,
          "text":"信息流",
          "path":"/xlist",
          "icon":"fa fa-linkedin-square",
          "children":[
            {
              "id":65,
              "text":"信息流管理",
              "parentId":64,
              "path":"/xlist/list",
              "value":""
            },
            {
              "id":66,
              "text":"添加信息流",
              "parentId":64,
              "path":"/xlist/add",
              "value":""
            }
          ]
        },
        {"id":2,"text":"Banner管理","path":"/banner","icon":"fa fa-picture-o","children":[{"id":15,"text":"首页banner日历配置","parentId":2,"path":"/banner/setting","value":""}]},{"id":3,"text":"预定义","path":"/predfine","icon":"fa fa-pencil-square","children":[{"id":16,"text":"预定义动作列表","parentId":3,"path":"/predefine/list","value":""},{"id":17,"text":"添加动作","parentId":3,"path":"/predefine/add","value":""}]},{"id":4,"text":"任务规则","path":"/job","icon":"fa fa-windows","children":[{"id":18,"text":"任务规则列表","parentId":4,"path":"/job/list","value":""},{"id":19,"text":"添加任务","parentId":4,"path":"/job/add","value":""}]},{"id":6,"text":"文章管理","path":"/article","icon":"fa fa-book","children":[{"id":76,"text":"文章管理","parentId":6,"path":"/article/list","value":""},{"id":77,"text":"添加新文章","parentId":6,"path":"/article/add","value":""}]},{"id":1,"text":"用户及权限管理","path":"/user","icon":"fa fa-users","children":[{"id":14,"text":"用户管理","parentId":1,"path":"/user","value":""},{"id":12,"text":"角色管理","parentId":1,"path":"/user/role","value":""},{"id":13,"text":"角色权限管理","parentId":1,"path":"/user/auth","value":""}]},{"id":11,"text":"旧管理后台","path":"/old","icon":"el-icon-setting","children":[{"id":50,"text":"旧管理后台","parentId":11,"path":"/old","value":""}]}]
    }
  },
  computed: {
    collapse () {
      return this.isCollapse
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key,keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.el-menu--collapse{
  width: auto;
}
.el-menu--collapse>.el-menu-item [class^=fa], 
.el-menu--collapse>.el-menu-item [class^=el-icon-], 
.el-menu--collapse>.el-submenu>.el-submenu__title [class^=el-icon-]{
  width: 1em;
}
.el-menu [class^=fa]{
  vertical-align: middle;
  margin-right: 5px;
  /*width: 24px;*/
  text-align: center;
  /*font-size: 18px;*/
}
</style>