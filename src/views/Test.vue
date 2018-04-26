<template>
  <div>
    <ul class="selectedList">
      <li v-for="(item, index) in state.giftInviteDurationLists" :key="index">{{item.name}} x {{item.isSelectedPrice}}</li>
    </ul>
    <ul class="giftList">
      <li v-for="(item, index) in state.giftList" :key="index" @click="add(index)" :class="{'active' : index === state.selectedGiftIndex}">{{item.name}}</li>
    </ul>
    <input type="text" v-model="state.quantity">
    <input type="button" value="选中" @click="submit()">
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: {
        quantity: 1,
        giftList: [
          {
            name: '利是',
            unitPrice: 50,
            friendQuantity: 0,
            isSelectedPrice: 0,
            ownQuantity: ''
          },
          {
            name: '鲜花',
            unitPrice: 1,
            friendQuantity: 0,
            isSelectedPrice: 0,
            ownQuantity: 10
          },
          {
            name: '汽车',
            unitPrice: 1,
            friendQuantity: 0,
            isSelectedPrice: 0,
            ownQuantity: 10
          }
        ],
        checkedNames: ['小明', '小红'],
        giftInviteDurationLists: [],
        selectedGiftIndex: -1
      }
    }
  },
  methods: {
    add: function(index) {
      this.state.selectedGiftIndex = index
      this.state.quantity = 1
    },
    submit: function () {
      let idx =  this.state.selectedGiftIndex  // 使用简短变量替代 已选礼物的下标
      let quantity = this.state.quantity  // 输入框的礼物数量
      let giftList = this.state.giftList  // 礼物列表，只要不是要修改礼物列表的都可以用这个变量
      let selectedGifts = this.state.giftInviteDurationLists  // 已选礼物列表，只要不是要修改列表的都可以用这个变量

      if (idx < 0) {
        alert('请先选择礼物')
        return
      }
      let selectedTotal = quantity * giftList[idx].unitPrice  // 当前新选的数量
      let newTotal = giftList[idx].isSelectedPrice * 1 + selectedTotal  // 新的总数

      // 朋友数量等于选中的人数
      this.state.giftList[idx].friendQuantity = this.state.checkedNames.length  // 此处对 全局的 giftList进行更改，所以不能用变量，要用回全局数据
      if(selectedGifts.length > 0) {
        // 判断是否在已选礼物列表中，不存在则为新礼物
        let isNew = true
        for (let x in selectedGifts) {
          if ( giftList[idx] === selectedGifts[x]) {
            isNew = false  // 存在已选，则不是新礼物
          }
        }
        // 新礼物
        if (isNew) {
          console.log('新的礼物')
          this.state.giftInviteDurationLists.push(giftList[idx])
          this.state.giftList[idx].isSelectedPrice = selectedTotal  // 此处更新全局
        } else {
          // 已选的礼物
          // 这里缺少 ownQuantity为空的情况
          if (giftList[idx].ownQuantity !== '') {
            if (newTotal <= giftList[idx].ownQuantity) {  // 新的总数不超过限定
              this.state.giftList[idx].isSelectedPrice = newTotal  // 此处更新全局
            } else {
              let errorMsg = '对不起，你输入的数量大于你拥有的数量'
              alert(errorMsg)
              return
            }
          } else if (newTotal <= 200000) {  // 新的总数超过限定
            console.log('特殊礼物')
            this.state.giftList[idx].isSelectedPrice = newTotal
          } else {
            let msg = '红包不超过200,000'
            console.log(msg)
            alert(msg)
            return
          }
        }
      } else {
        console.log('第一次选礼物')
        this.state.giftInviteDurationLists.push(giftList[idx])
        this.state.giftList[idx].isSelectedPrice = selectedTotal
      }
    },
    submitOk: function () {
      if (this.state.selectedGiftIndex < 0) {
        alert('请先选择礼物')
        return
      }
      let selectedTotal = this.state.quantity * this.state.giftList[this.state.selectedGiftIndex].unitPrice
      // 朋友数量等于选中的人数
      this.state.giftList[this.state.selectedGiftIndex].friendQuantity = this.state.checkedNames.length
      if(this.state.giftInviteDurationLists.length > 0) {
        // 判断是否在已选礼物列表中，不存在则为新礼物
        let isNew = true
        for (let x in this.state.giftInviteDurationLists) {
          if ( this.state.giftList[this.state.selectedGiftIndex] === this.state.giftInviteDurationLists[x]) {
            isNew = false  // 存在已选，则不是新礼物
          }
        }
        // 新礼物
        if (isNew) {
          console.log('新的礼物')
          this.state.giftInviteDurationLists.push(this.state.giftList[this.state.selectedGiftIndex])
          this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice = selectedTotal
        } else {
          // 已选的礼物
          // 这里缺少 ownQuantity为空的情况
          if (this.state.giftList[this.state.selectedGiftIndex].ownQuantity !== '') {
            if (this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice + selectedTotal <= this.state.giftList[this.state.selectedGiftIndex].ownQuantity) {
              console.log(this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice + selectedTotal)
              this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice = this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice * 1 + selectedTotal
            } else {
              let errorMsg = '对不起，你输入的数量大于你拥有的数量'
              console.log(errorMsg)
              alert(errorMsg)
              return
            }
          } else if (this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice * 1 + selectedTotal <= 200000) {
            console.log('特殊礼物')
            this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice = this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice * 1 + selectedTotal
          } else {
            console.log('红包不超过200,000')
            return
          }
        }
      } else {
        console.log('第一次选礼物')
        this.state.giftInviteDurationLists.push(this.state.giftList[this.state.selectedGiftIndex])
        this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice = selectedTotal
      }
    },
    submitOld: function () {
      console.log(this.state)
      let selectedTotal = this.state.quantity * this.state.giftList[this.state.selectedGiftIndex].unitPrice
      // 朋友数量等于选中的人数
      this.state.giftList[this.state.selectedGiftIndex].friendQuantity = this.state.checkedNames.length
      if(this.state.giftInviteDurationLists.length > 0) {
        // 判断是否在已选礼物列表中
        for (let x in this.state.giftInviteDurationLists) {
          // 如果在数组里
          if ( this.state.giftList[this.state.selectedGiftIndex] === this.state.giftInviteDurationLists[x]) {
            // 这里缺少 ownQuantity为空的情况
            if (this.state.giftList[this.state.selectedGiftIndex].ownQuantity !== '') {
              if (this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice + selectedTotal <= this.state.giftList[this.state.selectedGiftIndex].ownQuantity) {
                console.log(this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice + selectedTotal)
                this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice = this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice * 1 + selectedTotal
              } else {
                console.log('错误')
                return
              }
            } else if (this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice <= 200000) {
              console.log('特殊礼物')
              this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice = this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice * 1 + selectedTotal
            } else {
              console.log('红包不超过200,000')
              return
            }
          } else {
            console.log('新的礼物')
            this.state.giftInviteDurationLists.push(this.state.giftList[this.state.selectedGiftIndex])
            this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice = selectedTotal
          }
        }
      } else {
        console.log('第一次选礼物')
        this.state.giftInviteDurationLists.push(this.state.giftList[this.state.selectedGiftIndex])
        this.state.giftList[this.state.selectedGiftIndex].isSelectedPrice = selectedTotal
      }
    }
  }
}
</script>
<style>
.selectedList,
.giftList{
  list-style: none;
}
.selectedList{
  padding-bottom: 1em;
  border-bottom: 1px solid #eee;
}
.selectedList li,
.giftList li{
  display: inline-block;
  list-style: none;
  padding: 10px 20px;
  border: 1px solid #eee;
  margin: 8px 8px 0;
}
.giftList li.active{
  border: 1px solid #f56c6c;
}
</style>
