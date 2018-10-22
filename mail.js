var request = require("request");
var lineReader = require('line-reader');
var fs = require('fs');

var contents = fs.readFileSync('content.html', 'utf8');
var attachmentBase64 = fs.readFileSync('attachment.txt', 'utf8');
var i = 0;

lineReader.eachLine('emails.txt', function(line, last) {

var options = { method: 'POST',
  url: 'https://api.sendgrid.com/v3/mail/send',
  headers:
   { 'content-type': 'application/json',
     authorization: 'Bearer <<API KEY>>' },
  body:
   { personalizations:
      [ { to:
           [ { email: line,
               name: '' } ],
          cc:
            [ { email: 'mail@example.com',
                name: 'Example Name' } ],
          subject: 'Example Subject Line' } ],
     from: { email: 'frommail@example.com', name: 'Example Name' },
     reply_to: { email: 'replymail@example.com', name: 'Example name' },
     content: [ { type: 'text/html', value: contents } ],
     attachments:
      [ { content: attachmentBase64,
          filename: 'filename.extension',
          type: 'application/pdf' } ] },
  json: true };

module.exports.mailfunc = request(options, function (error, response, body) {
  if (error) throw new Error(error);

  i = i + 1;
  console.log(i + '. ' + line);
});

if (last) {
  return false; // stop reading
}
});
