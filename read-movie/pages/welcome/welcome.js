// pages/welcome/welcome.js
const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welcome: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      welcome: this._getDate()
    })
  },
  startTap() {
    wx.navigateTo({
      url: '/pages/read/read',
    })
  },
  _getDate() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let day = now.getDay()
    return `${year}年${month}月${date}日 ${days[day]}`
  }
})