const http=require("http")
const env=require("dotenv").config()
const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(`<h1>The college ${process.env.SERVER} server is running on port number ${process.env.PORT}</h1> `)
    resp.end()
})
server.listen(process.env.PORT,()=>{console.log("server has been started")})