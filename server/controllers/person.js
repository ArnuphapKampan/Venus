const { userLists } = require('./query/userLists')
const { userApprovs } = require('./query/userApprovs')
const { userRemoves } = require('./query/userRemoves')
const { userInfo } = require('./query/userInfo')
const { userChangePassword } = require('./query/userChangePassword')
const bcrypt = require('bcryptjs');

exports.list = async (req, res) => {
    try{
        const userList = await userLists();
        res.json(userList);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.approv = async (req, res) => {

    try{
        const result = await userApprovs(req.body);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.read = async (req, res) => {
    try{
        const result = await userInfo(req.params.id);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.changePassword = async (req, res) => {
    const { id,password } = req.body;
    try{
        //Encrypt passwords
        const salt = await bcrypt.genSalt(10);
        const passwordEncrypt = await bcrypt.hash(password, salt);

        let info = {
            id:id,
            password:passwordEncrypt
        };

        const message = await userChangePassword(info);
        res.send(message);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.remove = async (req, res) => {
    try{
        const userRemove = await userRemoves(req.params.id);
        res.json(userRemove);
    }catch(err){
        res.status(500).send(err)
    }
}
