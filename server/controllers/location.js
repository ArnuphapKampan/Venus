const { insertLocation } = require('./query/location/insertLocation')
const { locationLists } = require('./query/location/locationList')
const { locationEnable } = require('./query/location/locationEnable')
const { locationInfo } = require('./query/location/locationInfo')
const { locationUpdate } = require('./query/location/locationUpdate')
const { locationRemove } = require('./query/location/locationRemove')


exports.addLocation = async (req, res, next) => {
    const { title,detail,latitude,longitude,image,settingMarker } = req.body;
    try{
        let info = {
            title,
            detail,
            latitude,
            longitude,
            image: image,
            settingMarker: settingMarker
          }
        const message = await insertLocation(info);
        res.send(message);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.locationList = async (req, res) => {
    try{
        const result = await locationLists();
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.locationEnable = async (req, res) => {

    try{
        const result = await locationEnable(req.body);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.readLocation = async (req, res) => {
    try{
        const result = await locationInfo(req.params.id);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.updateLocation = async (req, res) => {
    const { id,title,detail,latitude,longitude,image,settingMarker } = req.body;
    try{

        let info = {
            id:id,
            title:title,
            detail:detail,
            latitude:latitude,
            longitude:longitude,
            image:image,
            settingMarker:settingMarker
        };
        const message = await locationUpdate(info);
        res.send(message);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.remove = async (req, res) => {
    try{
        const result = await locationRemove(req.params.id);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}