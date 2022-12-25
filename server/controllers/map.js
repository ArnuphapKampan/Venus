const { loadMarker } = require('./query/map/loadMarker')

exports.loadMarker = async (req, res) => {
    try{
        const result = await loadMarker();
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}
