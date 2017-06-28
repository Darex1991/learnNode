var http = require('http');
var result = [];
var paths = process.argv.slice(2);

function httpGet(index) {
  result[index] = '';
  http.get(paths[index], function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      result[index] += data;
    });
    res.on('end', function () {
      if(index === paths.length - 1) {
        result.forEach(function (p1) { console.log(p1) });
      }
    })
  });
}
for (var i = 0; i < paths.length; i++) {
  httpGet(i)
}
