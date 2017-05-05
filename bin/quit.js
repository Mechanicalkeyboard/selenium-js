const http = require('http');

// const postData = querystring.stringify({
//   'msg': 'Hello World!'
// });

// const options = {
//   hostname: '127.0.0.1',
//   port: 4444,
//   path: '/selenium-server/driver?cmd=shutDownSeleniumServer',
//   method: 'GET'
// };

// const req = http.request(options, (res) => {
//   console.log(`STATUS: ${res.statusCode}`);
//   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//   res.setEncoding('utf8');
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//   });
//   res.on('end', () => {
//     console.log('No more data in response.');
//   });
// });

// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// // write data to request body
// req.write();
// req.end();

http.get({
        hostname: '127.0.0.1',
        port: 4444,
        path: '/selenium-server/driver?cmd=shutDownSeleniumServer'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            //var parsed = JSON.parse(body);
            console.log(body);
        });
    });
