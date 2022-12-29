const { sendMessages } = require('./query/message/sendMessages')

exports.sendMessage = async (req, res) => {
    const { message } = req.body
    try{
        const result = await sendMessages(message);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}
