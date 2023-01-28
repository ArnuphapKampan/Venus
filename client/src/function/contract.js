import axios from 'axios';

export const contractHandler = async (info,authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/contract',info,{
        headers:{ authtoken }
    });
}

export const updateContractHandler = async (info, authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/contract-update',info,{
        headers:{ authtoken }
    });
}

export const handlerGetInfoEditContract = async (id,authtoken) => {
    return await axios.get(process.env.REACT_APP_API+`/contract-read/${id}`,{
        headers:{ authtoken }
    });
}

// export const handlerLocationRemove = async (id,authtoken) => {
//     return await axios.delete(process.env.REACT_APP_API+`/location-remove/${id}`,{
//         headers:{ authtoken }
//     });
// }