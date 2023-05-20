/// Codigo con http 

// const http = require("http");
// //const data= require("./utils/data")
// const getcharById= require("./controllers/getCharById")

// http.createServer( (req,res)=>{

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     console.log("Recibiendo solicitud")
//     const {url}=req
//     if(url.includes("rickandmorty/character/")){
//         const id= url.split("/").at(-1)
//         //Esta lineas era prueba importando data(5 personajes)
//         // const character=data.find( charac=>charac.id==id )

//         // if(character){
//         //     res.writeHead(200,{"Content-type":"application/json"})
//         //     return res.end(JSON.stringify(character))
//         // }else{
//         //     res.writeHead(404,{"Content-type":"application/json"})
//         //     return res.end(JSON.stringify({error:"character not found"}))
//         // }
//         console.log("buscan al personaje con id ",id)
//         getcharById(res,id)
//         return res

//     }

// }).listen(3001,"localhost")



/////////////Codigo con express/////////////////

const express= require("express");
const mainRouter=require(".//routes/index")


const server= express();

const {conn}=require("./DB_connection")
const PORT=3001
conn.sync({force:false}).then( ()=>{
   server.listen(PORT,"0.0.0.0", ()=>{
       console.log('Server raised in port: ' + PORT);
   }) }) 
   .catch(err=>console.log(err))


server.use((req, res, next) => {
   
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json());

server.use( (req,res,next)=>{
   //  req.url=`${req.url}/rickandmorty`
   //  next();
   console.log("body de la request",req.query)
   next();
});
server.use("/rickandmorty",mainRouter)

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
   const status = err.status || 500;
   const message = err.message || err;
   console.error(err);
   res.status(status).send(message);
 });