const postData = require('../../../data/posts-data').postList

Page({
  data: {
    read: {},
    collected: false
  },
  onLoad(options) {
    let id = options.id
    this.setData({
      read: postData[id]
    })
  },
  doCollection() {
    if (!this.data.collected) {
      wx.showToast({
        title: '取消'
      })
    } else {
      wx.showToast({
        title: '收藏'
      })
    }

    this.setData({
      collected: !this.data.collected
    })
  },
  doShare() {
    wx.showActionSheet({
      itemList: [
        '分享到微信好友',
        '分享到朋友圈',
        '分享到QQ'
      ],
      itemColor: '#357bb3'
    })
  }
})