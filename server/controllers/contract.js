const { contractInsert } = require('./query/contract/contractInsert')
const { contractLists } = require('./query/contract/contractList')
const { contractReads } = require('./query/contract/contractRead')
const { contractUpdates } = require('./query/contract/contractUpdate')

const { insertLog } = require('./query/log/insertLog')


exports.addContract = async (req, res, next) => {

    const { detail,url,status,engine } = req.body;

    try{
        let info = {
            document:detail.detail.document_number,
            document_format:detail.detail.document_number,
            document_number:detail.detail.document_number,
            detail:detail.detail,
            section_1:detail.section_1,
            section_2:detail.section_2,
            section_3:detail.section_3,
            section_4:detail.section_4,
            installment:detail.installment,
          }
        
        const lastID = await contractInsert(info);

        let logInfo = {
            detail:detail,
            url:url,
            engine:engine,
            status:status,
            lastID:lastID,
        }
        
        const log = await insertLog(logInfo);

        res.send("Create Contract successfully");
    }catch(err){
        res.status(500).send(err)
    }
}

exports.contractList = async (req, res) => {
    try{
        const result = await contractLists();
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.contractRead = async (req, res) => {
    try{
        const result = await contractReads(req.params.id);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.contractUpdate = async (req, res) => {
    const { detail,url,status,id,engine } = req.body;

    try{
        let info = {
            id:id,
            document:detail.detail.document_number,
            document_format:detail.detail.document_number,
            document_number:detail.detail.document_number,
            detail:detail.detail,
            section_1:detail.section_1,
            section_2:detail.section_2,
            section_3:detail.section_3,
            section_4:detail.section_4,
            installment:detail.installment,
          }
        
        const lastID = await contractUpdates(info);

        let logInfo = {
            detail:detail,
            url:url,
            engine:engine,
            status:status,
            lastID:lastID,
        }
        
        const log = await insertLog(logInfo);

        res.send("Update Contract successfully");
    }catch(err){
        res.status(500).send(err)
    }
}

// exports.remove = async (req, res) => {
//     try{
//         const result = await locationRemove(req.params.id);
//         res.json(result);
//     }catch(err){
//         res.status(500).send(err)
//     }
// }