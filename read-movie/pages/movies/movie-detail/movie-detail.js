// pages/movies/movie-detail/movie-detail.js
const requestData = require('../../../common/js/request').requestData

Page({
  data: {
    movie: {}
  },
  onLoad(options) {
    let id = options.id
    this._getMovie(id)
  },
  _getMovie(id) {
    requestData(`/v2/movie/subject/${id}`).then(res => {
      res = res.data
      this.setData({
        movie: res
      })
      console.log('movie detail', this.data.movie)
    }).catch(err => {
      console.log('movie detail', err)
    })
  }
})