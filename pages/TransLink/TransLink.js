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
    languageArr: [
      "自动检测",
      "中文",
      "英语",
      "西班牙语",
      "法语",
      "阿拉伯语",
      "俄语",
      "韩语",
      "德语",
      "日语",
      "葡萄牙语",
      "意大利语",
      "荷兰语",
      "泰语",
      "希腊语",
      "波兰语",
      "捷克语",
      "匈牙利语",
      "瑞典语",
      "芬兰语",
      "保加利亚语",
      "丹麦语",
      "罗马尼亚语",
      "斯洛文尼亚语",
      "爱沙尼亚语",
      "越南语",
      "繁体中文",
      "粤语",
      "文言文",
    ],
    currentLanguage: 0,
    targetLanguage: 1,
    recordState: false,
    imgURL: ''
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
      const re = res.result
      that.setData({
        currentText: re
      })
    }
    manager.onRecognize = function (res) {
      console.log(res.result)
    }
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var app = getApp()
    console.log(app.globalData.reservePhotoURL)
    this.setData({
      imgURL: app.globalData.reservePhotoURL
    })
    const pictureTranslate = require('../../utils/pictureTranslate.js');
    const language = require('../../utils/language.js');

    pictureTranslate.PictureTranslate(language.findLanguageCode(this.data.languageArr[this.data.currentLanguage]), language.findLanguageCode(this.data.languageArr[this.data.targetLanguage]), this,this.data.imgURL)
  },

  playCurrentVoice() {
    console.log("playCurrentVoice~" + this.data.currentText)
    const generateVoice = require('../../utils/generateVoice.js');
    generateVoice.GenerateVoice(this.data.currentText);
  },
  confirmText(event) {
    this.setData({
      currentText: event.detail.value
    })
  },
  translate() {
    const generalTranslate = require('../../utils/generalTranslate.js');
    const history = require('../../utils/history.js');

    const language = require('../../utils/language.js');
    generalTranslate.GeneralTranslate(this.data.currentText, language.findLanguageCode(this.data.languageArr[this.data.currentLanguage]), language.findLanguageCode(this.data.languageArr[this.data.targetLanguage]), this);

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
    const generateVoice = require('../../utils/generateVoice.js');
    generateVoice.GenerateVoice(this.data.outputText);
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
  takePhoto() {
    console.log("take a photo")
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      success(res) {
        const photo = res.tempFiles[0].tempFilePath
        wx.navigateTo({
          url: `/pages/ClipPicture/ClipPicture?photoPath=${photo}`
        })
      }
    })
  },
  setClipboardCur() {
    wx.setClipboardData({
      data: this.data.currentText
    })
  },
  setClipboardOut() {
    wx.setClipboardData({
      data: this.data.outputText
    })
  }
})