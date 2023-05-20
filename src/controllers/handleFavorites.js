//Codigo usado antes de sequelize
// let myFavorites=[]

// const postFav=(req,res)=>{
//     const personaje=req.body;
//     console.log("quieren agregar a: ",personaje)
//     myFavorites.push(personaje);
//     res.status(200).json(myFavorites)
// }

// const deleteFav =(req,res)=>{
//     const {id}=req.params
//     myFavorites=myFavorites.filter(favorito=>favorito.id!=id)
//     res.status(200).json(myFavorites)
// }

// module.exports={
//     postFav,
//     deleteFav
// }