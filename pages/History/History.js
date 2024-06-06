// pages/History/History.js
const app = getApp();
const history = require('../../utils/history.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiSelectState: false,
    transHistory: [],
    selectedHis: [],
    allSelected: false
  },
  delSingle(index) {
    var his = this.data.transHistory
    history.removeHistory(his[index].key)
    his.splice(index, 1)
    for (var i = index; i < his.length; i++) {
      his[i].id -= 1
    }
    this.setData({
      transHistory: his
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
      app.globalData.transHistory = this.data.transHistory
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
    const selects = this.data.selectedHis
    selects.sort()
    console.log("删除记录" + selects)

    const res = await wx.showModal({
      title: '提示',
      content: '是否删除历史记录',
    })
    if (res.confirm) {
      for (var i = 0; i < selects.length; i++) {
        this.delSingle(selects[i] - i)
      }
      app.globalData.transHistory = this.data.transHistory
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
    const res = wx.getStorageInfoSync();
    for (let i = 0; i < res.keys.length; i++) {
      let value = wx.getStorageSync(res.keys[i]);
      const Arr = app.globalData.transHistory;
      Arr.push({
        id: i,
        currentText: value.input,
        outputText: value.output,
        key: res.keys[i]
      });
    }
  },
  onShow() {
    this.setData({
      transHistory: app.globalData.transHistory
    })
  },
  selectAll() {
    let arr = this.data.transHistory
    let selectArr=[]
    let allSelected=this.data.allSelected
    if(allSelected){
      for (let i = 0; i < arr.length; i++) {
        arr[i].checked = false
      }
      allSelected=false
    }
    else{
      for (let i = 0; i < arr.length; i++) {
        arr[i].checked = true
        selectArr.push(i)
      }
      allSelected=true
    }
    this.setData({transHistory:arr,selectedHis:selectArr,allSelected:allSelected})
  }
})