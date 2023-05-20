const {Favorite} = require("../DB_connection.js")

const readAllFav=async(req,res)=>{

    try {
        const allFavorites= await Favorite.findAll();
        return res.status(200).json({allFavorites})
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports=readAllFav