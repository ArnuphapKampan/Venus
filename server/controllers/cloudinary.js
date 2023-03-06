const cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: process.env.COLUDINARY_CLOUD_NAME, 
    api_key: process.env.COLUDINARY_API_KEY,  
    api_secret: process.env.COLUDINARY_API_CECRET 
  });

exports.cloudinaryImage = async (req, res) => {

    try{
        const result = await cloudinary.uploader.upload(req.body.image,{
            public_id: Date.now(),
            result_type:'auto',
        },
        {folder: 'profile'});
        res.send(result)
        
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.cloudinaryLocationImage = async (req, res) => {

    try{
        const result = await cloudinary.uploader.upload(req.body.image,{
            public_id: Date.now(),
            result_type:'auto',
        },
        {folder: 'location'});
        res.send(result)
        
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.cloudinaryGalleryImage = async (req, res) => {

    try{
        const result = await cloudinary.uploader.upload(req.body.image,{
            public_id: Date.now(),
            result_type:'auto',
        },
        {folder: 'gallery'});
        res.send(result)
        
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.cloudinaryRemove = async (req, res) => {
    try{
        let image_id = req.body.publicID;
        await cloudinary.uploader.destroy(image_id,(result) => {
            res.send(result);
        })
    }catch(err){
        res.status(500).send(err.message)
    }
}