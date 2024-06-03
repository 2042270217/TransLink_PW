// history相关功能
function setHistory(texInput, texOutput) {
  let key = new Date().getTime().toString();
  const tex = {
    "input": texInput,
    "output": texOutput,
  };
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

module.exports = {
  setHistory,
  getHistoryInfo,
  getHistory,
  clearHistory,
  removeHistory,
}