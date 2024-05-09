// pages/TransLink/TransLink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentText: '',
    outputText: '',
    languageArr: ['中文', '英文'],
    currentLanguage: 0,
    targetLanguage: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  playOutputVoice(){
    console.log("playOutputVoice~"+this.data.outputText);
  }
})