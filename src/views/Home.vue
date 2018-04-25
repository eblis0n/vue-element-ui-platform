<template>
  <div>
    <p v-for="(item, index) in 120" :key="index">{{index}}: There are some text.</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.box{
  width:200px;
  height: 100px;
  background: #2B3954;
  clip-path: polygon(
    0 20px,
    20px 0,
    180px 0,
    100% 20px,
    100% 80px,
    180px 100%,
    20px 100%,
    0 80px
  )
}
</style>
