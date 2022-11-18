const { checkUsername } = require('./function/checkUsername')
const { checkLogin } = require('./function/checkLogin')
const { insertUser } = require('./function/insert-user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route POST localhost:8888/api/register
// @desc  Route register
// @access Public
exports.createRegister = async (req, res, next) => {
    const { name,surname,username,password } = req.body;
    try{
        //check username
        const user = await checkUsername(username);
        if(user.length > 0){
            return res.status(400).json({errors: [{ msg: 'User already exists' }]})
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
            return res.status(400).json({errors: [{ msg: 'Username Invalid Credentials' }]})
        }

        //Compare Encrypt passwords
        
        const isMatch = await bcrypt.compare(password,user[0].password); 

        if(!isMatch){
            return res.status(400).json({errors: [{ msg: 'Password Invalid Credentials' }]})
        }

        //payload return jsonwebtoken
        const payload = {
            user:{
                name:user[0].name,
                surname:user[0].surname,
                username:user[0].username,
                role:user[0].role
            }
        };

        await jwt.sign(payload, 'jwtSecret',
            {expiresIn: '3600'},
            (err, token) => {
               
                if(err) throw err;
                res.json({ token });
        });
        // res.send(message);
    }catch(err){
        res.status(500).send(err)
    }
}

