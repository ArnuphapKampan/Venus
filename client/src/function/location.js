import axios from 'axios';

export const addLocationHandler = async (info,authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/location',info,{
        headers:{ authtoken }
    });
}
