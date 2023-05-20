//Antes de sequelize
// const users= require("../utils/users")

// const login=(req,res)=>{
//     const {email,password}=req.query
//     console.log("email: ",email);
//     console.log("password: ",password)
//     const match=users.filter( user=> user.email===email && user.password===password) //Busco que el usuario y la contraseña coincidan

//     if(match.length>0){ //Si encontre usuario
//         res.status(200).json({access:true})
//     }else{  //Si no hubo coincidencia
//         res.status(200).json({access:false})
//     }
// }



// module.exports= login;

//Login con sequelize

const {User}=require("../DB_connection");


const login=async(req,res)=>{
    const {email,password}=req.query
    if(!email || !password) return res.status(400).send("Faltan datos");
    try {
        const findUser= await User.findOne({where:{email}})
        if(!findUser) return res.status(404).send("Usuario no encontrado")
        if(findUser.password!=password) return res.status(403).send("Contraseña incorrecta")
        return res.status(200).json({access:true})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports=login;