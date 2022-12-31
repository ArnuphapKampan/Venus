const { sendMessages } = require('./query/message/sendMessages')
const { listMessages } = require('./query/message/listMessages')
const { unreadMessages } = require('./query/message/unreadMessages')
const { noteMessages } = require('./query/message/noteMessages')

const axios = require('axios');
const moment = require('moment');
moment.locale('th')
require('dotenv').config();
exports.sendMessage = async (req, res) => {
    const { message } = req.body
    try{
        await lineNotify(message);
        const result = await sendMessages(message);
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.listMessage = async (req, res) => {
    try{
        const result = await listMessages();
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.unreadMessage = async (req, res) => {
    try{
        const result = await unreadMessages();
        res.json(result);
    }catch(err){
        res.status(500).send(err)
    }
}

exports.noteMessage = async (req, res) => {
    try{
        const message = await noteMessages(req.body);
        res.send(message);
    }catch(err){
        res.status(500).send(err)
    }
}

const lineNotify = (message)  => {
    return new Promise((resolve, reject) => {
        axios({
        method: "POST",
        url: "https://notify-api.line.me/api/notify",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${process.env.LINE_API_TOKEN}`,
    
        },
        data: `message=Message\nDate: ${moment().format('ll')}\nTime: ${moment().format('LTS')}\nName: ${message.name}\nEmail: ${message.email}\nTel: ${message.telephone}\nDescription:\n${message.description}`
        })
        .then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        });
    });
}