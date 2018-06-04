// pages/movies/movies.js
const requestData = require('../../common/js/request').requestData
Page({
  data: {
    inTheatersSubjects: [],
    comingSoonSubjects: [],
    top250Subjects: [],
    searchMovies: [],
    inputValue: ''
  },
  onLoad() {
    this._getInTheaters()
    this._getComingSoon()
    this._getTop250()
  },
  toMoreMovies(e) {
    let category = e.currentTarget.dataset.category
    wx.navigateTo({
      url: '../movies/more-movies/more-movies?category=' + category,
    })
  },
  toMovieDetailTap(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../movies/movie-detail/movie-detail?id=' + id,
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  searchMovieTap(e) {
    let value = this.data.inputValue
    this._getSearchMovie(value)
  },
  cancelMovieSearchTap() {
    this.setData({
      searchMovies: [],
    })
    this.setData({
      inputValue: ''
    })
  },
  _getSearchMovie(value) {
    requestData('/v2/movie/search?q=' + value).then(res => {
      res = res.data
      this.setData({
        searchMovies: res.subjects
      })
      console.log('get search movie', this.data.searchMovies)
    }).catch(err => {
      console.log('get search movie', err);
    })
  },
  _getInTheaters() {
    requestData('/v2/movie/in_theaters?start=0&count=3').then(res => {
      res = res.data
      this.setData({
        inTheatersSubjects: res.subjects
      }) 
      console.log('in theaters', this.data.inTheatersSubjects)
    }).catch(err => {
      console.log('in theaters', err)
    })
  },
  _getComingSoon() {
    requestData('/v2/movie/coming_soon?start=0&count=3').then(res => {
      res = res.data
      this.setData({
        comingSoonSubjects: res.subjects
      })
      console.log('coming soon', this.data.comingSoonSubjects)
    }).catch(err => {
      console.log('coming soon', err)
    })
  },
  _getTop250() {
    requestData('/v2/movie/top250?start=0&count=3').then(res => {
      res = res.data
      this.setData({
        top250Subjects: res.subjects
      })
      console.log('top250', this.data.top250Subjects)
    }).catch(err => {
      console.log('top250', err)
    })
  }
})