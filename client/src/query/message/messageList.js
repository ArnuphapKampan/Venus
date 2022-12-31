import axios from 'axios';

export const messageList = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/message-list',{},{
        headers:{ authtoken }
    });
}

export const messageListUnread = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API+'/message-list-unread',{},{
        headers:{ authtoken }
    });
}