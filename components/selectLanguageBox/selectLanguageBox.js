// components/selectLanguageBox/selectLanguageBox.js
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
    languageArr: ['中文', '英文'],
    currentLanguage: 0,
    targetLanguage: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    }
  }
})