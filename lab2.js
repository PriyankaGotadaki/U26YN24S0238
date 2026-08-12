/"write a node js pgm to handle student data using http GET and POST methods"/

const http=require("http");
const server=http.createServer((req,resp)=>{ 
if(req.method=="GET"){
    resp.writeHead(200,{"content-type":"text/html"});
    resp.write(`<form method="post">`);
    resp.write(`Rollno:<input type="text" name="rno" /><br/>`);
    resp.write(`Name:<input type="text" name="name" /><br/>`);
    resp.write(`<input type="submit" />`);
    resp.write(`</form>`);
    resp.end();
}

else if(req.method=="POST"){
    let body=``;
    req.on("data",(chunk)=>{
        body=body+chunk;
    });
    req.on("end",()=>{
        const data=new URLSearchParams(body);
        console.log(`Rollno=${data.get("rno")}\n`);
        console.log(`Name=${data.get("name")}`);
        resp.writeHead(200,{"content-type":"text/html"});
        resp.end("<h1>Your request has been recieved</h1>");
    })
}
});
server.listen(3000,()=>{console.log("server started")});