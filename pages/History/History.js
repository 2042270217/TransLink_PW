// pages/History/History.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiSelectState: false,
    transHistory: [
    ],
    selectedHis: []
  },
  delSingle(index){
    var his=this.data.transHistory
    his.splice(index,1)
    for(var i=index;i<his.length;i++){
      his[i].id-=1
    }
    this.setData({
      transHistory:his
    })
    console.log(this.data.transHistory)
  },
  async checkDel(event) {
    console.log("删除记录" + event.detail)
    const res = await wx.showModal({
      title: '提示',
      content: '是否删除该历史记录',
    })
    if (res.confirm) {
      this.delSingle(event.detail)
      app.globalData.transHistory=this.data.transHistory
      wx.showToast({
        title: '删除成功',
        icon: 'none',
        duration: 1500
      })
    }
  },
  checkGroup(event) {
    this.setData({
      selectedHis: event.detail.value
    })
    console.log(this.data.selectedHis)
  },
  async delSelect() {
    const selects=this.data.selectedHis
    selects.sort()
    console.log("删除记录" + selects)

    const res = await wx.showModal({
      title: '提示',
      content: '是否删除历史记录',
    })
    if (res.confirm) {
      for(var i=0;i<selects.length;i++){
        this.delSingle(selects[i]-i)
      }
      app.globalData.transHistory=this.data.transHistory
      wx.showToast({
        title: '删除成功',
        icon: 'none',
        duration: 1500
      })
    }
  },
  multiSelect() {
    this.setData({
      multiSelectState: !this.data.multiSelectState
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({transHistory:app.globalData.transHistory})
  },
  selectAll(){
    
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

  }
})