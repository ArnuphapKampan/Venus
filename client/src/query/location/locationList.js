import axios from 'axios';

export const locationList = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/location-list',{},{
        headers:{ authtoken }
    });
}