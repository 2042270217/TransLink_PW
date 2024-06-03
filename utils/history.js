// history相关功能
function setHistory(texInput, texOutput) {
  let key = new Date().getTime().toString();
  const tex = {
    "input": texInput,
    "output": texOutput,
  };
  SetTransHistory(texInput,texOutput,key)
  wx.setStorageSync(key, tex);
}

function getHistoryInfo() {
  wx.getStorageInfo({
    success(res) {
      console.log(res.keys)
      console.log(res.currentSize)
      console.log(res.limitSize)
    }
  })
}

function getHistory(key) {
  wx.getStorage({
    key: key,
    success (res) {
      console.log(res.data)
    }
  })
}

function clearHistory() {
  wx.clearStorage({
    success: res => {
      console.log(res);
    }
  })
}

function removeHistory(key) {
  wx.removeStorage({
    key: key,
    success(res) {
      console.log(res)
    }
  });
}

function SetTransHistory(textInput,textOutput,key){
  const app = getApp();
  const HisArr=app.globalData.transHistory
  const length=HisArr.length
  HisArr.push({id:length,currentText:textInput,outputText:textOutput,key:key})
  app.globalData.transHistory=HisArr
}

module.exports = {
  setHistory,
  getHistoryInfo,
  getHistory,
  clearHistory,
  removeHistory,
}

