var bookshelf = require('../bookshelf');
var Book = require('./book.js')
var Review = bookshelf.Model.extend({
  tableName: 'reviews',
  artist: function() {
    return this.belongsTo(Book);
  }
})
module.exports = Review;
