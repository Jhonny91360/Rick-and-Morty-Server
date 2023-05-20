const {User}= require("../DB_connection.js")

const postUser=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password || email=="" || password==""){
        return res.status(400).send("Faltan datos")
    }
    try {
        const newUser= await User.findOrCreate({where:{email:email},defaults:{password:password} })
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json({err:error.message})
    }
}

module.exports=postUser