const https = require ('https');

let getRecipe = function getRecipe(givenIngred)
{
    let token = 'cd40c85971e24d75b5c63fb6d3299882';

    ingredients = givenIngred.toString()

    return new Promise((resolve, reject) => {
        let body = ""

        const req = https.request({
            host: 'api.spoonacular.com',
            path: `/recipes/findByIngredients?apiKey=${token}&ingredients=${ingredients}&number=5`,
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