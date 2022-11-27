import axios from 'axios';

export const userLists = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/user-list',{},{
        headers:{ authtoken }
    });
}