function requestData(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://t.yushu.im' + url,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: function() {
        // complete
      }
    })
  })
}

module.exports = {
  requestData
}