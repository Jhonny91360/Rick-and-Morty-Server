
///// codigo con http ///////

// const axios = require("axios")

// const getcharById= (res,id)=>{
    

//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response=>response.data)
//     .then(data=>{
//         const personaje={
//             id:id,
//             name:data.name,
//             gender:data.gender,
//             species:data.species,
//             origin:data.origin,
//             image:data.image,
//             status:data.status
//         }
//         res.writeHead(200,{"Content-type":"application/json"})
//         res.end(JSON.stringify(personaje))   
//       })
//     .catch(err=>{
//         res.writeHead(500,{"Content-type":"text/plain"})
//         res.end(err.message)
//     })
// }

// module.exports=getcharById

//// codigo con express ////////////

const URL="https://rickandmortyapi.com/api/character/"
const axios = require("axios")

const getCharById= async (req,res)=>{
    const {id}=req.params
    // axios(`${URL}${id}`)
    // .then(response=>response.data)
    // .then(data=>{

    //         if(data.name){   //Si se encuentra un personaje
    //             const personaje={
    //                 id:id,
    //                 name:data.name,
    //                 gender:data.gender,
    //                 species:data.species,
    //                 origin:data.origin,
    //                 image:data.image,
    //                 status:data.status
    //                 }
    //             res.status(200).json(personaje)
    //             } 
    //         else{       //Si no se encuentra un personaje
    //             res.status(404).send("Not found")
    //         }    
                
    //  }).catch(err=>{
    //             res.status(500).json({error:err.message})
    //         })
    try {
        const response= await axios(`${URL}${id}`)
        if (response){
            const {data}=response
            const personaje={
                    id:id,
                    name:data.name,
                    gender:data.gender,
                    species:data.species,
                    origin:data.origin,
                    image:data.image,
                    status:data.status
                    }
                res.status(200).json(personaje)
        }else{       //Si no se encuentra un personaje
                res.status(404).send("Not found")
            
            }    
    } catch (error) {
        console.log("repaila")
        res.status(500).json({error:"repaila"})
    }
    
}

module.exports=getCharById