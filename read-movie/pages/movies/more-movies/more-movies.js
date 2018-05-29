// pages/movies/more-movies/more-movies.js
const requestData = require('../../../common/js/request').requestData
Page({
  data: {
    movies: []
  },
  onLoad(options) {
    let category = options.category
    wx.setNavigationBarTitle({
      title: category
    })

    let dataUrl = ''
    switch (category) {
      case '正在热映':
        dataUrl = '/v2/movie/in_theaters?'
        break
      case '即将上映':
        dataUrl = '/v2/movie/coming_soon'
        break
      case 'Top250':
        dataUrl = '/v2/movie/top250'
        break
    }
    this._getMoiveData(dataUrl)
  },
  _getMoiveData(dataUrl) {
    requestData(dataUrl).then(res => {
      res = res.data
      this.setData({
        movies: res.subjects
      })
      console.log('more movies', this.data.movies)
    }).catch(err => {
      console.log('more movies', err)
    })
  }
})