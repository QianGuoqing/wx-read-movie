// pages/movies/movie-detail/movie-detail.js
const requestData = require('../../../common/js/request').requestData

Page({
  data: {
    movie: {},
    directors: '',
    casts: '',
    genres: '',
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
      this.setData({
        directors: this._concatDirectors(this.data.movie.directors),
        casts: this._concatCasts(this.data.movie.casts),
        genres: this._concatGenres(this.data.movie.genres),
      })
    }).catch(err => {
      console.log('movie detail', err)
    })
  },
  _concatDirectors(directors) {
    let name = ''
    directors.forEach(director => {
      name += `${director.name} `
    })
    return name
  },
  _concatCasts(casts) {
    let name = ''
    casts.forEach(cast => {
      name += `${cast.name} `
    })
    return name
  },
  _concatGenres(genres) {
    return genres.join(' ')
  }
})