const express = require("express")
const app = express();
const port = process.env.PORT || 3001
// process.env. Heroku uses this to run the app
// but on the local machine the app uses port 3001

app.use(express.urlencoded({extended: true}))
// middleware parsing(extracting) - parses the data from the client out for the server to use
app.use(express.json())
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks_db")
// process.env.MONGODB_URI is running the app when in Heroku
// "mongodb://localhost/googlebooks_db" runs on the local machine when not deployed in Heroku
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    // ^^ in Heroku the public folder is being rebuilt in the client folder for the pages to apper
}
const apiRoutes = require("./controllers")

// creates all the route requests (put, get, delete)
apiRoutes(app);

// listen creates the backend(database) server and connects to it
app.listen(port, function(){
    console.log("app is listening on http://localhost:" + port)
})