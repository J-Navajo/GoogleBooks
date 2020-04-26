var db = require("../models")
var axios = require("axios")
function apiRoutes(app){
    app.get("/api/googlebooks/:title", function(req, res) {
        var title = req.params.title

// google book search to return the api
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
    .then(function(results) {
        res.json(results.data)
    })
    })
    app.post("/api/books", function(req, res) {
        var newBook = req.body
        db.Book.create(newBook)
        .then(function(results) {
            res.json(results)
        })
    })
    app.delete("/api/books/:id", function(req, res) {
        var id = req.params.id
        db.Book.remove({_id:id})
        .then(function(results) {
            res.json(results)
        })
    })
} 

module.exports=apiRoutes