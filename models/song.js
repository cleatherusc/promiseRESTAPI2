var bookshelf = require('../bookshelf');
var Artist = require('./artist');

var Song = bookshelf.Model.extend({
  tableName: 'songs',
  artist: function() {
    return this.belongsTo(Artist);
  }
})
module.exports = Song;
