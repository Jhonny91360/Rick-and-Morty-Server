const getCharById=require("../controllers/getCharById")
//const {postFav,deleteFav} =require("../controllers/handleFavorites")
const login=require("../controllers/login")
const postFav=require("../controllers/postFav")
const postUser=require("../controllers/postUser")
const deleteFav=require("../controllers/deleteFav")
const readAllFav=require("../controllers/readAllFav")

const { Router }=require("express")

const mainRouter= Router();

mainRouter.get("/character/:id",(req,res)=>{
    getCharById(req,res);
});

mainRouter.get("/login",(req,res)=>{
    login(req,res);
});

mainRouter.post("/login",(req,res)=>{
    postUser(req,res)
} )

mainRouter.post("/fav",(req,res)=>{
    postFav(req,res)
} )
mainRouter.get("/fav",(req,res)=>{
    readAllFav(req,res)
} )

mainRouter.delete("/fav/:id",(req,res)=>{
    deleteFav(req,res)
} )

module.exports=mainRouter;