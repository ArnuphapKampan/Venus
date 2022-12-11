const { userLists } = require('./query/userLists')
const { userApprovs } = require('./query/userApprovs')
const { userRemoves } = require('./query/userRemoves')
// exports.create = async (req, res) => {
//     res.send("hello create person")
// }

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

// exports.read = async (req, res) => {
//     res.send("hello read person")
// }

// exports.update = async (req, res) => {
//     res.send("hello update person")
// }

exports.remove = async (req, res) => {
    try{
        const userRemove = await userRemoves(req.params.id);
        res.json(userRemove);
    }catch(err){
        res.status(500).send(err)
    }
}
