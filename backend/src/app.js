const express = require("express")

const songRoutes = require("./routes/song.route")

const app = express()


    app.use(express.json())//middleware for req.body

    app.use('/', songRoutes);
    







module.exports =  app