//引入js
//翻译图片
function PictureTranslate(from, to, that, Photourl) {
  const generalTranslate = require('./generalTranslate.js');
  const language = require('./language.js');

  wx.request({
    url: 'https://aip.baidubce.com/oauth/2.0/token?client_id=MZNRF0KTHRh9jML40568xuKd&client_secret=RzxUlh8V7fBYTenVr9tZRdecYLLBryZt&grant_type=client_credentials',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    success: data => {
      let url = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=' + data.data.access_token;
      const fs = wx.getFileSystemManager();
      fs.readFile({
        filePath: Photourl,
        encoding: 'base64',
        success: msg => {
          wx.request({
            url: url,
            method: 'POST',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
              language_type: language.convertLanguageCode(from),
              image: msg.data,
            },
            success: data => {
              let tex = '';
              for (let i = 0; i < data.data.words_result.length; i++) {
                tex += data.data.words_result[i].words + '\n';
              }
              that.setData({
                currentText: tex,
              })
              generalTranslate.GeneralTranslate(tex, from, to, that);
            }
          })
        }
      })
    }
  })
}

module.exports = {
  PictureTranslate,
}