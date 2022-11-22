const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.auth = (req, res, next) => {
    
    const token = req.headers['authtoken'];

    if(!token){
        return res.status(401).json({ msg:'No token, autorization denied' });
    }

    //verify token
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).json({ msg:`${err}` });
    }
}