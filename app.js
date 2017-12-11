const http = require('http');
const server = http.createServer((request, response)=>{

    const{headers, method, url} = request;
    const userAgent = headers['user-agent'];
    if (url=="/"){
        response.statusCode="200";
        console.log("request received");
        console.log("url: " + url);
        response.write('<html><head><title>Hello</title></head><body><h1>Hello Out There!</h1></body></html>');
        response.end;
    } else {
        response.statusCode="404";
        console.log("file not found.  Rut Row.");
        response.write('<html><head><title>Rut Row</title></head><body><h1>Rut Row! File not Found!</h1></body></html>')
        
    }
}).listen(8080, () => {
    console.log("listening on 8080.")
});

