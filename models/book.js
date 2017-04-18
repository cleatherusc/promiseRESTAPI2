var bookshelf = require('../bookshelf');
var Review = require('./review');

var Book = bookshelf.Model.extend({
  tableName: 'books',
  reviews: function() {
    return this.hasMany(Review);
  }
})

module.exports = Book;
