import axios from 'axios';

export const logList = async (id,authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/log-list',id,{
        headers:{ authtoken }
    });
}