require('dotenv').config();

var express = require('express')
var Book = require('./models/book');
var Review = require('./models/review');
var bodyParser = require('body-parser');

var app = express()

//console.log(__dirname+'/public')
//app.use(express.static(__dirname + '/public'));

var urlencodedParser = bodyParser.urlencoded({ extended:true })

app.get('/api/v1/reviews', (req, res)=>{
  Review.fetchAll().then((reviews)=>{
    res.json(reviews);
  })
});

app.get('/api/v1/books/:id', (req, res)=>{
  Book.where('id', req.params.id)
      .fetch({require: true, withRelated:['reviews']})
      .then((songs)=>{
        res.json(songs);
      }, (err)=>{
        console.log(err)
        res.status(404).json({error:{message:'song not found'}})
      })
});

app.post('/api/v1/reviews', urlencodedParser, function(req, res){
  if (!req.body) return res.sendStatus(400);
  var review = new Review({
    book_id:req.body.book_id,
    headline:req.body.headline,
    body:req.body.body,
    rating:req.body.rating
  })
  review.save().then(()=>{res.json(review);})
});



app.listen(8000, function () {
  console.log('starting on 8000')
});
