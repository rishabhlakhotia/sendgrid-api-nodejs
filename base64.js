var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {

    // read binary data
    var bitmap = fs.readFileSync(file);

    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

var buff = base64_encode('filename.extension');
fs.writeFileSync('attachment.txt', buff);
