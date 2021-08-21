// google cloud stuff

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
  // Creates a client
const client = new vision.ImageAnnotatorClient();

async function textDetect(fileName) {
    
    // Performs label detection on the image file
    const [result] = await client.textDetection(`./resources/${fileName}`);
    const labels = result.textAnnotations;
    console.log('Text:');
    let descriptionArr = [];
    let removeFirst = false;

    labels.forEach(label => {
        if (removeFirst == false)
        {
            removeFirst = true;
        }
        else
            descriptionArr.push(label.description)
    });

    return descriptionArr;
}

module.exports = {textDetect: textDetect}