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

export const currentUser = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/current-user',{},{
        headers:{ authtoken }
    });
}

export const handlerRemove = async (id,authtoken) => {
    return await axios.delete(process.env.REACT_APP_API+`/user-remove/${id}`,{
        headers:{ authtoken }
    });
}

export const handlerGetInfoEditUser = async (id,authtoken) => {
    return await axios.get(process.env.REACT_APP_API+`/person/${id}`,{
        headers:{ authtoken }
    });
}

export const handlerPassword = async (info,authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/change-user-password',info,{
        headers:{ authtoken }
    });
}