const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://apurva1:Mongo@123@cluster0.qo1kt.mongodb.net/TourismDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })