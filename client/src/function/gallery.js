import axios from 'axios';

export const addGalleryHandler = async (info,authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/gallery',info,{
        headers:{ authtoken }
    });
}

export const handlerRemove = async (id,authtoken) => {
    return await axios.delete(process.env.REACT_APP_API+`/gallery-remove/${id}`,{
        headers:{ authtoken }
    });
}