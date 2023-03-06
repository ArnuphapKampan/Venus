import axios from 'axios';

export const galleryList = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/gallery-list',{},{
        headers:{ authtoken }
    });
}