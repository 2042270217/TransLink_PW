// pages/TransLink/TransLink.js

const app = getApp();
//引入插件：微信同声传译
const plugin = requirePlugin('WechatSI');
//获取全局唯一的语音识别管理器recordRecoManager
const manager = plugin.getRecordRecognitionManager();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentText: '',
    outputText: '',
    languageArr: ['中文', '英文'],
    currentLanguage: 0,
    targetLanguage: 1,
    recordState: false,
    imgURL:''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initRecorder();
  },

  initRecorder() {
    const that = this;
    // 正常开始录音识别时会调用此事件
    manager.onStart = function (res) {
      console.log("成功开始录音识别")
    }
    //识别结束事件
    manager.onStop = function (res) {
      console.log("结束录音", res.result)
      const re=res.result
      that.setData({currentText:re})
    }
    manager.onRecognize = function (res) {
      console.log(res.result)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var app=getApp()
    this.setData({imgURL:app.globalData.reservePhotoURL})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  playCurrentVoice() {
    console.log("playCurrentVoice~" + this.data.currentText)
  },
  confirmText(event) {
    this.setData({
      currentText: event.detail.value
    })
  },
  translate() {
    console.log("translate~" + this.data.currentText)
    this.setData({
      outputText: this.data.currentText
    })

  },

  setCurrentLanguage(event) {
    this.setData({
      currentLanguage: event.detail.value
    })
    console.log(this.data.languageArr[this.data.currentLanguage])
  },
  setTargetLanguage(event) {
    this.setData({
      targetLanguage: event.detail.value
    })
  },
  changeLanguage() {
    const temp = this.data.currentLanguage
    this.setData({
      currentLanguage: this.data.targetLanguage
    })
    this.setData({
      targetLanguage: temp
    })
  },

  playOutputVoice() {
    console.log("playOutputVoice~" + this.data.outputText);
  },

  acceptVoice() {
    if (!this.data.recordState) {
      manager.start()
      this.setData({
        recordState: true
      })
    } else {
      manager.stop();
      this.setData({
        recordState: false
      })
    }
  },
  takePhoto(){
    console.log("take a photo")
    wx.chooseMedia({
      count:1,
      mediaType:['image'],
      success(res){
        const photo=res.tempFiles[0].tempFilePath
        wx.navigateTo({
          url: `/pages/ClipPicture/ClipPicture?photoPath=${photo}`
        })
      }
    })
  },
  setClipboardCur(){
    wx.setClipboardData({
      data: this.data.currentText
    })
  },
  setClipboardOut(){
    wx.setClipboardData({
      data: this.data.outputText
    })
  }
})