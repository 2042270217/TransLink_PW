// components/singleHistory.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    currentText:{
      type:String,
      value:'历史'
    },
    outputText:{
      type:String,
      value:'History'
    },
    index:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    shouldUnfold:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkDel(){
      this.triggerEvent('del',this.properties.index)
    },
    unfold(){
      this.setData({
        shouldUnfold:!this.data.shouldUnfold
      })
    },
    playCurrentVoice(){
      console.log("playOutputVoice~" + this.data.outputText);
      const generateVoice = require('../../utils/generateVoice.js');
      generateVoice.GenerateVoice(this.data.outputText);
    }
  }
})