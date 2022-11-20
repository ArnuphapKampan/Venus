import axios from 'axios';

export const registerHandler = async (user) => {
    return await axios.post(process.env.REACT_APP_API+'/register',user,{
        headers:{'Content-Type':'application/json'}
    });
}

export const loginHandler = async (user) => {
    return await axios.post(process.env.REACT_APP_API+'/login',user,{
        headers:{'Content-Type':'application/json'}
    });
}