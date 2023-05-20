const {Favorite}= require("../DB_connection");

const deleteFav=async(req,res)=>{
    const {id}=req.params
    try {
        const byeFav= await Favorite.destroy({where:{id:id}})
        if(!byeFav) return res.status(201).send("No se encontro id a eliminar")
        const allFavorites= await Favorite.findAll()
        return res.status(200).json({allFavorites})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports=deleteFav