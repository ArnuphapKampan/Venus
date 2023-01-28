const { logList } = require('./query/log/logList')

exports.logList = async (req, res) => {
    try{
        const result = await logList(req.body.id);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}
