let express = require("express");
let flickrAPI = require("../api/flickr")

let router = express.Router();

router.get('/', async (req, res) => {
    flickrAPI.getPhotosIDs("americanfood,japanesefood,italianfood,koreanbbq,sushi,ramen,mexicanfood,koreanfood,vietnamesefood", 500).then(data =>{
        
        let parsedJSON = JSON.parse(data)
        
        let photoIDs = parsedJSON.photos.photo
        
        let test = {photos: []};
        
        for (let i = 0; i < photoIDs.length; i++)
        {
            let string = `https://live.staticflickr.com/${photoIDs[i].server}/${photoIDs[i].id}_${photoIDs[i].secret}_w.jpg`
            test.photos.push(string)
        }

        let finishedData = JSON.stringify(test)

        res.send(finishedData)
    })
})

router.get('/:tags', async (req, res) => {
    flickrAPI.getPhotosIDs(req.params.tags, 100).then(data =>{
        
        let parsedJSON = JSON.parse(data)
        
        let photoIDs = parsedJSON.photos.photo
        
        let test = {photos: []};

        for (let i = 0; i < photoIDs.length; i++)
        {
            let string = `https://live.staticflickr.com/${photoIDs[i].server}/${photoIDs[i].id}_${photoIDs[i].secret}_w.jpg`
            test.photos.push(string)
        }

       
        let finishedData = JSON.stringify(test)

        res.send(finishedData)
    })
})

module.exports = router;