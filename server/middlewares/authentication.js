const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];

        // TODO: Implement refreshToken functionality.
        jwt.verify(token, process.env.SECRET, (err, payload) => {
            if(err){
                return res.status(403).send("Forbbiden access token");
            }
            req.user = payload.user;
            next();
        });

    }else{
        return res.status(401).send("Missing access token")
    }
}
