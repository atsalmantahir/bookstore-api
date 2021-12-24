const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookModel = new Schema(
  {
    title: {type:String},
    author: {type:String},
    year_written: {type:Number},
    edition: {type:String},
    price: {type:Number},
  }
);

module.exports = mongoose.model('Book', bookModel)