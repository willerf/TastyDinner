require('dotenv').config()
const https = require ('https');

let getRecipe = function getRecipe(givenIngred)
{
    let token = process.env.CLIENT_SECRET
    console.log(token)

    ingredients = givenIngred.toString()

    return new Promise((resolve, reject) => {
        let body = ""

        const req = https.request({
            host: 'api.spoonacular.com',
            path: `/recipes/findByIngredients?apiKey=${token}&ingredients=${ingredients}&number=12`,
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
                resolve(body)
            })
        })

            req.on('error', error => {
                console.error("error: " + error);
                reject(new Error('something went wrong'));

            })

            req.end();

    })
}

module.exports = {getRecipe: getRecipe}