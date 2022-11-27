const { userLists } = require('./query/userLists')

exports.create = async (req, res) => {
    res.send("hello create person")
}

exports.list = async (req, res) => {
    try{
        const userList = await userLists();
        res.json(userList);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.read = async (req, res) => {
    res.send("hello read person")
}

exports.update = async (req, res) => {
    res.send("hello update person")
}

exports.remove = async (req, res) => {
    res.send("hello remove person")
}
