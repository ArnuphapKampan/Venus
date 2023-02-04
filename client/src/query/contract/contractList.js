import axios from 'axios';

export const contractLists = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/contract-list',{},{
        headers:{ authtoken }
    });
}