//通用文本翻译
const md5 = require('./md5.js');
const info = require('./info.js')
const utils = require('./utils.js');
const history = require('./history.js');

function GeneralTranslate(q, from, to, Object) {
  const url = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
  let salt = utils.generateRandomString(10);
  let sign = info.appid + q + salt + info.secretKey;
  sign = md5.MD5(sign);
  wx.request({
    url: url,
    method: 'POST',
    data: {
      q: q,
      from: from,
      to: to,
      appid: info.appid,
      salt: salt,
      sign: sign,
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    success(data) {
      console.log(data);
      let tex = '';
      for (let i = 0; i < data.data.trans_result.length; i++) {
        tex += data.data.trans_result[i].dst + '\n';
      }
      Object.setData({
        outputText: tex,
      })
      history.setHistory(q, tex);
      history.getHistoryInfo();
    }
  })
}

module.exports = {
  GeneralTranslate,
}