// components/inputBox/inputBox.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentText:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playVoice(){
      console.log("playVoice~")
    }
    ,
    confirmText(event){
      this.setData({
        currentText:event.detail.value
      })
    },
    translate(){
      console.log("translate~")
    }
  }
})