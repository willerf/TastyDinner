const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const upload = require('express-fileupload')


const port = process.env.PORT || 3001;

const app = express()

app.use(cors());
app.use(logger('dev'));


app.listen(port, function() {
    console.log("Runnning on " + port);
  });

app.use(upload())


app.post('/file-upload', (req, res) => {
    if (req.files) {
        console.log(req.files)

        console.log(req.files.test)
        
        let file = req.files.test

        let fileName = file.name

        console.log(fileName)

        file.mv('./' + fileName, (err) => {
            if (err)
            {
                console.log(err)
                res.send(err)
            }
            else
            {
                console.log("file uploaded")
                res.send("file Uploaded")
            }
        })
    }
})