<template>
  <div>
    <a href="javascript:void(0)" @click="exportCsv(productFileds, products)">导出CSV</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productFileds: [
        {
          name: 'type',
          text: '类型'
        },
        {
          name: 'name',
          text: '商品名称'
        },
        {
          name: 'number',
          text: '数量'
        },
        {
          name: 'price',
          text: '单价'
        }
      ],
      products: [
        {
          type: '食品',
          name: '旺旺雪饼',
          number: '100',
          price: '25'
        },
        {
          type: '水果',
          name: '香蕉',
          number: '10',
          price: '2.5'
        }
      ]
    }
  },
  methods: {
  /**
    \uFEFF（Unicode 编码：U+FEFF ）。它是 ES5 新增的空白符，叫「字节次序标记字符（Byte Order Mark）」，也就是 BOM；
  　　Unicode3.2 之前，\uFEFF 表示「零宽不换行空格（Zero Width No-Break Space）」；
  　　Unicode3.2 新增了 \u2060 用来表示零宽不换行空格， \uFEFF 就只用来表示「字节次序标记字符（Byte Order Mark）」；
  　　String.prototype.trim 是 ES5 增加的方法，对于老旧浏览器，还得使用自己实现的 trim；
  　　至少在 低版本的 IE浏览器下 ，jQuery 1.7.2 是无法过滤字符串两端的 BOM 字符。
  　　考虑到某些浏览器实现的 trim 不过滤 <NBSP> 或 <BOM>，
  　　于是 jQuery 多加了一层检测，jQuery 1.8.1 在之前版本的基础上就添加了对BOM的过滤
  **/

    /**
     * HTML <a> download 属性
     * <a href="/images/myw3schoolimage.jpg" download="w3logo">
     * 定义和用法
       download 属性规定被下载的超链接目标。
       在 <a> 标签中必须设置 href 属性。
       该属性也可以设置一个值来规定下载文件的名称。所允许的值没有限制，浏览器将自动检测正确的文件扩展名并添加到文件 (.img, .pdf, .txt, .html, 等等)。
       在 HTML5 中，download 属性是 <a> 标签的新属性。
       语法
       <a download="filename">
       属性值
       值         描述
       filename   规定作为文件名来使用的文本。
     */
    
    /**
     * window.URL || window.webkitURL || window.mozURL 的作用
     *  URL对象是硬盘（SD卡等）指向文件的一个路径，如果我们做文件上传的时候，想在没有上传服务器端的情况下看到上传图片的效果图的时候就可是以通过var url=window.URL.createObjectURL(obj.files[0]);获得一个http格式的url路径，这个时候就可以设置到<img>中显示了。
     *  window.webkitURL和window.URL是一样的，window.URL标准定义，window.webkitURL是webkit内核的实现（一般手机上就是使用这个），还有火狐等浏览器的实现。
     */
    
    /**
     * CSV （逗号分隔值文件格式）
     * 
     * 
     * 
     * 
     */

     /**
      * [exportCsv description]
      * @param  {[type]} tableHeader [description]
      * @param  {[type]} tableBody   [description]
      * @return {[type]}             [description]
      */
    exportCsv: function (tableHeader, tableBody) {
      // let csv = '\ufeff'
      let csv = ''
      let keys = []
      tableHeader.forEach((item) => {
        csv += '"' + item.text + '",'
        keys.push(item.name)
      })
      csv = csv.replace(/\,$/, '\n')  // 将字符串最后一个逗号换成换行符

      tableBody.forEach((item) => {
        let _item = {}
        keys.forEach((key) => {
          csv += '"' + item[key] + '",'
        })
        csv = csv.replace(/\,$/, '\n')
      })
      console.log(csv)
      csv = csv.replace(/"null"/g, '""')

      let blob = new Blob([csv], {type: 'text/csv,charset=UTF-8'})
      let csvUrl = window.URL.createObjectURL(blob)
      let a = document.createElement('a')
      let now = new Date()
      a.download = '商品信息导出' + now.getFullYear() + this.to2(now.getMonth() + 1) + this.to2(now.getDate()) + this.to2(now.getHours()) + this.to2(now.getMinutes()) + this.to2(now.getSeconds()) + '.csv'
      a.href = csvUrl
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
    to2: function (num) {
      return num > 9 ? num : '0' + num
    }
  }
}
</script>
<style lang="less" scoped>
</style>
