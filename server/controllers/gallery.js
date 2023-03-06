const { addGallery } = require('./query/gallery/gallery')
const { galleryLists } = require('./query/gallery/galleryLists')
const { galleryListHomePage } = require('./query/gallery/galleryListHomePage')
const { galleryEnable } = require('./query/gallery/galleryEnable')
const { galleryRemove } = require('./query/gallery/galleryRemove')

exports.addGallery = async (req, res) => {
    try{
        const result = await addGallery(req.body);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.galleryList = async (req, res) => {
    try{
        const result = await galleryLists();
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.galleryListHomePage = async (req, res) => {
    try{
        const result = await galleryListHomePage();
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.galleryEnable = async (req, res) => {

    try{
        const result = await galleryEnable(req.body);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.galleryRemove = async (req, res) => {
    try{
        const result = await galleryRemove(req.params.id);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}