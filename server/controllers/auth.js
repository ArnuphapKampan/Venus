const config = require('../config');
const connection = config.connection;


// @route POST localhost:8888/api/register
// @desc  Route register
// @access Public
exports.createRegister = async (req, res, next) => {
    const { username,password } = req.body;
    try{
        //check username
        const val = await connection.query("SELECT * FROM user", function (err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result));
        });

    }catch(err){
        res.send(err)
    }
}

exports.login = async (req, res, next) => {
    res.send('login')
}