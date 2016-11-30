// http://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries

fs = require('fs')
http = require('http')
path = require('path')

const books = require('./booklist')

books.forEach( (r) =>{
  const s = `http://s3.amazonaws.com/st-messenger/day1/${r.awsKey}/${r.awsKey}${r.offset+1}.jpg`
  var file = fs.createWriteStream(`./original/${path.basename(s,'.jpg').slice(0,-1)}`);
  var request = http.get(s, function(response) {
    response.pipe(file);
  });
})
