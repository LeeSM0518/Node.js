var HTMLParser = require('node-html-parser');
var fs = require('fs');
var fileInput = ``;
var i = 1;

// fs.readFile(`data/${1}`, 'utf8', function(err, description) {
//     while()
// });

fs.readFile(`data/1`, 'utf8', function(err, description){
    var root = HTMLParser.parse(description);
    console.log(root.childNodes[0].childNodes[0]);
    console.log(root.childNodes[0].childNodes[1].id);
    console.log(root.childNodes[0].childNodes[3].id);
    console.log(root.childNodes[0].childNodes[9].id);
});

// data.fileInput = fs.readFileSync('data/1', 'utf8');

