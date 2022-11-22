const { checkUsername } = require('./query/checkUsername')
const { checkLogin } = require('./query/checkLogin')
const { updateTimeLogin } = require('./query/updateTimeLogin')
const { insertUser } = require('./query/insert-user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// @route POST localhost:8888/api/register
// @desc  Route register
// @access Public
exports.createRegister = async (req, res, next) => {
    const { name,surname,username,password } = req.body;
    try{
        //check username
        const user = await checkUsername(username);
        if(user.length > 0){
            return res.status(400).json({ msg: 'User already exists' })
        }

        //Encrypt passwords
        const salt = await bcrypt.genSalt(10);
        const passwordEncrypt = await bcrypt.hash(password, salt);

        let info = {
            name:name,
            surname:surname,
            username:username,
            password:passwordEncrypt
        };

        const message = await insertUser(info);
        res.send(message);
    }catch(err){
        res.status(500).send(err)
    }
}



exports.login = async (req, res, next) => {
    const { username,password } = req.body;
    try{
        //check username
        const user = await checkLogin(username);

        if(user.length <= 0){
            return res.status(400).json({ msg: 'Username Invalid Credentials' })
        }

        //Compare Encrypt passwords
        
        const isMatch = await bcrypt.compare(password,user[0].password); 

        if(!isMatch){
            return res.status(400).json({ msg: 'Password Invalid Credentials' })
        }

        //payload return jsonwebtoken
        const payload = {
            user:{
                id:user[0].id,
                username:user[0].username,
                name:user[0].name,
                surname:user[0].surname,
                role:user[0].role,
                image:user[0].image
            }
        };

        await updateTimeLogin(username);
        
        await jwt.sign(payload, process.env.JWT_SECRET,
            {expiresIn: '1h'},
            (err, token) => {
               
                if(err) throw err;
                res.json({ token,payload });
        });
        // res.send(message);
    }catch(err){
        res.status(500).send(err)
    }
}



exports.currentUser = async (req, res) => {
    const user = await checkUsername(req.user.username);
    res.json(user)
}
