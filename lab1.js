const http=require("http");
const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"});
    resp.write(`<h1>BLDEA's commerce BHS Arts & science college Jamkhandi</h1>`);
    resp.write(`<h2>Started year 1963</h2>`);
    resp.write(`<h3>Located in Jamkhandi</h3>`);
    resp.end();

});
server.listen(3000,()=>{console.log("server started")});