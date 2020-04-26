var mongoose = require("mongoose");
var Schema = mongoose.Schema
var bookSchema = new Schema({
    title: {type: String, required: true},
    authors: {type: String, required: true},
    description: {type: String, required: false},
    image: {type: String, required: false},
    link: { type: String, required: false}
})

var Book = mongoose.model("Book", bookSchema);
module.exports = Book