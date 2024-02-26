const jwt = require('jsonwebtoken')

const fetchuser = (req, res, next) =>{
    const token = req.headers.token
    if(!token){
        // res.status(401).send("no token")
        res.status(401).send("Please authenticate with a valid token")
        
    }
    try{
        req.id = jwt.verify(token, process.env.JWT_SECRET)
        next()

    }catch(err){
        // res.status(401).send(err.message)
        res.status(401).send("Please authenticate with a valid token")
        console.log(err)
    }
}

module.exports = fetchuser