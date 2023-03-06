import axios from 'axios';

export const galleryListHomePage = async () => {
    return await axios.post(process.env.REACT_APP_API+'/gallery-list-homepage',{},{});
}