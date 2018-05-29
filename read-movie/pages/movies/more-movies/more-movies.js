// pages/movies/more-movies/more-movies.js
const requestData = require('../../../common/js/request').requestData
Page({
  data: {
    movies: [],
    start: 0,
    count: 20,
    movieUrl: ''
  },
  onLoad(options) {
    let category = options.category
    wx.setNavigationBarTitle({
      title: category
    })

    let dataUrl = ''
    switch (category) {
      case '正在热映':
        dataUrl = '/v2/movie/in_theaters'
        break
      case '即将上映':
        dataUrl = '/v2/movie/coming_soon'
        break
      case 'Top250':
        dataUrl = '/v2/movie/top250'
        break
    }
    this.setData({
      movieUrl: dataUrl
    })
    this._getMoiveData(this.data.movieUrl)
  },
  loadMoreMovies() {
    this._getMoiveData(`${this.data.movieUrl}?start=${this.data.start}&count=${this.data.count}`)
    wx.showLoading()
  },
  _getMoiveData(dataUrl) {
    let moviesArray = this.data.movies.slice(0)
    this.setData({
      start: this.data.start + 20
    })
    requestData(dataUrl).then(res => {
      res = res.data
      let subjects = res.subjects
      for (let i = 0; i < subjects.length; i++) {
        moviesArray.push(subjects[i])
      }
      this.setData({
        movies: moviesArray
      })
      wx.hideLoading()
      console.log('more movies', this.data.movies)
    }).catch(err => {
      console.log('more movies', err)
    })
  }
})