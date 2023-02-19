const { documentNumberDuplicate } = require('./query/document-number/documentNumberDuplicate')
const { documentNumberAuto } = require('./query/document-number/documentNumberAuto')

exports.documentNumberDuplicate = async (req, res) => {

    try{
        const result = await documentNumberDuplicate(req.body);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.documentNumberAuto = async (req, res) => {

    try{
        const result = await documentNumberAuto(req.body);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}
