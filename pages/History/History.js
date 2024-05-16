// pages/History/History.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiSelectState:false,
    transHistory: [{
        id: 0,
        currentText: "11111",
        outputText: "OneOneOneOneOne"
      },
      {
        id: 1,
        currentText: "22222",
        outputText: "TwoTwoTwoTwoTwo"
      },
      {
        id: 2,
        currentText: "33333",
        outputText: "ThreeThreeThreeThreeThree"
      },
      {
        id: 3,
        currentText: "44444",
        outputText: "FourFourFourFourFour"
      },
      {
        id: 4,
        currentText: "55555",
        outputText: "FiveFiveFiveFiveFive"
      }
    ]
  },
  async checkDel(event) {
    console.log("删除记录"+event.detail)
    const res = await wx.showModal({
      title: '提示',
      content: '是否删除该历史记录',
    })
    console.log(res)
    if(res.confirm){
      wx.showToast({
        title: '删除成功',
        icon:'none',
        duration:1500
      })
    }
  },
  checkGroup(event){
    console.log(event)
  },
  multiSelect(){
    this.setData({
      multiSelectState:!this.data.multiSelectState
    })
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

  }
})