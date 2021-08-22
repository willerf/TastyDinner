const https = require ('https');

let getPhotos = function getRecipe(tags)
{
    return new Promise((resolve, reject) => {
        let body = ""

        const req = https.request({
            host: 'www.flickr.com',
            path: `/services/feeds/photos_public.gne?tags=${tags}&format=json&tagmode=any`,
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        }, (res) => {

            console.log('statusCode: ' + res.statusCode)
            console.log('url:' + req.path)
            res.on("data", d => {
                
                body += d;
            })

            res.on("end", () => {

                // cleans up messed up JSON flickr gives
                let data = body.substring(15, body.length - 1)

                // parses json
                let finalData = JSON.parse(data)
                
                resolve(finalData.items)
            })
        })

            req.on('error', error => {
                console.error("error: " + error);
                reject(new Error('something went wrong'));

            })

            req.end();

    })
}

let getPhotosIDs = function getPhotosIDs(tags, perPage) {
    return new Promise((resolve, reject) => {
        let body = ""

        const req = https.request({
            host: 'api.flickr.com',
            path: `/services/rest/?method=flickr.photos.search&api_key=0d921aa88ce5dfc9c3f6cb7e23f794a4&tags=${tags}&content_type=1&format=json&per_page=${perPage}`,
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        }, (res) => {

            console.log('statusCode: ' + res.statusCode)
            console.log('url:' + req.path)
            res.on("data", d => {
                
                body += d;
            })

            res.on("end", () => {
                let data = body.substring(14, body.length - 1)
                
                // parses json
                //let finalData = JSON.parse(data)
                
                resolve(data)

                
            })
        })

            req.on('error', error => {
                console.error("error: " + error);
                reject(new Error('something went wrong'));

            })

            req.end();

    })
}


module.exports = {getPhotos: getPhotos, getPhotosIDs: getPhotosIDs}