const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    
    const token = req.headers['autn-token'];

    if(!token){
        return res.status(401).json({ msg:'No token, autorization denied' });
    }

    //verify token
    try{
        const decoded = jwt.verify(token,'KPConstruction-venusSecret');
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).json({ msg:`${err}` });
    }
}