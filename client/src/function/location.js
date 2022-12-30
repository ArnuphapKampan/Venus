import axios from 'axios';

export const addLocationHandler = async (info,authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/location',info,{
        headers:{ authtoken }
    });
}

export const updateLocationHandler = async (info, authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/location-update',info,{
        headers:{ authtoken }
    });
}

export const handlerGetInfoEditLocation = async (id,authtoken) => {
    return await axios.get(process.env.REACT_APP_API+`/location-read/${id}`,{
        headers:{ authtoken }
    });
}

export const handlerLocationRemove = async (id,authtoken) => {
    return await axios.delete(process.env.REACT_APP_API+`/location-remove/${id}`,{
        headers:{ authtoken }
    });
}