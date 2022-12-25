import axios from 'axios';

export const loadMarker = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/load-marker',{},{
        headers:{ authtoken }
    });
}