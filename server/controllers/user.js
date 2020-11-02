const models = require('../models');
const sendEmail = require('../utils/mail');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const forgotPassword = (req, res) => {

    const email = req.body.email;

    models.User.findOne({ email: email}).then( user => {
        if ( !user ){
            return res.status(404).send({message: "No account with that email address exists" });
        }

        const token = jwt.sign({ _userId: user.id}, process.env.SECRET, { expiresIn: 3600 });


        // sendEmail(email, 
        //     "Account Password Reset",
        //     'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        //     'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        //     'http://' + req.headers.host + '/reset/' + token + '\n\n' +
        //     'If you did not request this, please ignore this email and your password will remain unchanged.\n', null)
        //     .catch( error => {
        //         if ( error ){
        //             return res.status(500).json("Error seding email")
        //         }
        //     });

        res.status(200).send({message: "An email has been sent to the user account", token: token});
    });
};

const validateToken = (req, res) => {

    const token = req.params.token;

    jwt.verify(token, process.env.SECRET, (err, payload) => {
        if( err ){
            return res.status(403).send("Invalid token");
        }
    });
    res.status(200).send("Password reset token is valid");
};

const resetPassword = (req, res) => {

    const token = req.params.token;
    const password = req.body.password;

    jwt.verify(token, process.env.SECRET, (err, payload) => {
        if( err ){
            return res.status(403).send("Invalid token");
        }

        const newPassword = bcrypt.hashSync(password, 8);
        console.log(payload._userId);
        models.User.findByPk(payload._userId).then(user => {

            if ( !user ){
                return res.status(404).send("User does not exist");
            }

            user.update({password: newPassword});
            res.status(200).send("Password change succesfully");

        }).catch( err => res.status(500).json(err));
    });
};


module.exports = {
    forgotPassword,
    validateToken,
    resetPassword,
}