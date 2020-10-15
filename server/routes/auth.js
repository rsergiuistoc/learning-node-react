const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const models = require('../models');
const bodyParser = require('body-parser');
const db = require('../models');
const { User } = require('../models');
const { token } = require('morgan');
/*
    Another Approach is to separate the business logic from the route definition to a separate file,
    (e.g controllers), each handler will have a separate controller defined to it.
*/

const verifyBasicAuthHeader = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if( !(authHeader && authHeader.split(" ")[0] === 'Basic') ){
        return res.status(401).send("Missing required authentication");
    }
    next();
}

module.exports = (app) => {

    /**
     * Register User
     */
    app.post(`/api/auth/register` , function(req, res){

        const body = req.body;
        console.log(body);
        models.User.create({
            username: body.username,
            email: body.email,
            password: bcrypt.hashSync(body.password, 8),
            joined: Date.now()
        }).then(user => {
            if(user){
                res.send({ message: "User was registered succesfully!" });
            }
        });
    });

    /**
     * Login User
     */
    app.post(`/api/auth/login`, verifyBasicAuthHeader, function(req, res){
        
        const encodedCredentials = req.headers.authorization.split(" ")[1];
        const credentials = Buffer.from(encodedCredentials, 'base64').toString('ascii');

        if ( credentials.length === 1){
            return res.status(401).send("Missing authentication credentials");
        }

        const [username, password] = credentials.split(":");

        models.User.findOne({ where: { username: username}}).then(user=> {
            if( !user ){
                return res.status(404).send({ message: "No user registere user found"});
            }

            const passwordIsValid = bcrypt.compareSync(password, user.password);

            if( !passwordIsValid ){
                return res.status(401).send({ message: "Invalid Password"});
            }
            
            // TODO: Implement check for token limit on users.
            // If the user exists and the credentials are valid create an new auth token and return
            const expirationPeriod = process.env.TOKEN_EXPIRY_RATE;
            const accessToken = jwt.sign({ user: user}, process.env.SECRET, { expiresIn: expirationPeriod });
            models.Token.create({
                key: bcrypt.hashSync(accessToken, 8),
                created: Date.now(),
                expiry: new Date(Date.now()+ parseInt(expirationPeriod, 10)),
                userId: user.id
            });

            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                token: accessToken
            });
        });
    });

    /**
     * Logout User
     */
    app.post(`/api/auth/logout`, function(req, res){
        // Logout the current user, delete the token , remove the user object fromthe request object
        // TODO: Logout through blacklist untill token expires.
        console.log(req.headers.authorization);
    });

    /**
     * Logout User from all devices
     */
    app.post(`/api/auth/logout-all`, function(req,res){
        
       models.User.findByPk(req.user.id).then(user => {
        if( user ){
            user.getTokens({raw: true}).then( tokens => {
                tokens.forEach( token => {
                    models.Token.destroy({ where: {id: token.id}});
                })
            });
            return res.send(200);
        }
        res.status(404).send({ message: "No user registere user found"});
       });  

    });
};