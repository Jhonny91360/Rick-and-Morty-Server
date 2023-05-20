const {Favorite}= require("../DB_connection")

const postFav=async(req,res)=>{

    try {
        const {id,name,origin,status,image,species,gender}=req.body
        if (!name || !origin || !status || !image || !species || !gender){
            return res.status(401).send("Faltan datos")
        }
        const [newFav,created]= await Favorite.findOrCreate({
            where:{
              id,name,origin,status,image,species,gender
            },
            defaults:{
              id,name,origin,status,image,species,gender
            }
        }) 
        if(!created) return res.status(404).send("Favorito ya esta registrado")
        const allFavorites= await Favorite.findAll()
        console.log("Lista de favoritos actualizada: ",allFavorites)
        return res.status(201).json({allFavorites})

    } catch (error) {
        return res.status(500).send(error.message)
    }   
    
}

module.exports=postFav