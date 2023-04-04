const fs = require('fs')
const sharp = require('sharp')
const path = require('path');


module.exports = function resize(file, format, width, height) {

    file = path.join(__dirname, 'photos', file);
    const readStream = fs.createReadStream(file)
    let transform = sharp()

    if (format) {
        transform = transform.toFormat(format)
    }

    if (width || height) {
        transform = transform.resize(width, height)
    }

    return readStream.pipe(transform)
}