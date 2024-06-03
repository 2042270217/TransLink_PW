function GenerateVoice(text) {
  wx.request({
    url: 'https://aip.baidubce.com/oauth/2.0/token?client_id=MZNRF0KTHRh9jML40568xuKd&client_secret=RzxUlh8V7fBYTenVr9tZRdecYLLBryZt&grant_type=client_credentials',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    success(data) {
      wx.request({
        url: 'http://tsn.baidu.com/text2audio',
        responseType: 'arraybuffer',
        data: {
          tex: encodeURIComponent(text),
          tok: data.data.access_token,
          cuid: '9zoLLvj1Wk7NSKPlsJ0pQQmWw7B8lSNx',
          ctp: '1',
          lan: 'zh',
        },
        success(msg) {
          const wxAudio = wx.createInnerAudioContext({}); // 音频API
          const fs = wx.getFileSystemManager(); // 文件管理器API
          // 查看保存文件，（小程序开发工具右上角 “详情”->“基本信息”->“文件系统”）
          const target = `${wx.env.USER_DATA_PATH}/${new Date().getTime()}.mp3`;

          fs.writeFile({
            filePath: target,
            data: msg.data,
            encoding: 'binary',
            success: (res) => {
              wxAudio.src = target
            }
          })
          // onCanplay监听音频进入可以播放状态的事件
          wxAudio.onCanplay(() => {
            wxAudio.play()
          })
        }
      })
    }
  })
}

module.exports = {
  GenerateVoice,
}