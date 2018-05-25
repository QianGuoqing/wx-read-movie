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
  toDetail(e) {
    let currentIndex = e.currentTarget.dataset.readIndex
    wx.navigateTo({
      url: `/pages/read/read-detail/read-detail?id=${currentIndex}`,
    })
  },
  onLoad() {
    this.setData({
      readData
    })
  }
})