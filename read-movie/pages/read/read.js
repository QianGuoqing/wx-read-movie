const readData = require('../../data/posts-data').postList

Page({
  data: {
    swiperImages: [
      '/images/wx.png',
      '/images/vr.png',
      '/images/iqiyi.png'
    ],
    readData: []
  },
  onLoad() {
    this.setData({
      readData
    })
  }
})