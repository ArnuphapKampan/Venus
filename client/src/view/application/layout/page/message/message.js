import React, { useEffect,useState } from 'react'
//active menu
import { activeMenu,logout } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Moment from 'react-moment';
// import Moment from 'react-moment';
import { Table } from 'antd';
import { EyeFilled,EyeInvisibleFilled } from '@ant-design/icons';
//query info
import axios from 'axios';
import { toast } from 'react-toastify';
import { messageList } from '../../../../../query/message/messageList';
import { messageListUnread } from '../../../../../query/message/messageList';
const Message = ({setCounter}) => {
    const authtoken = localStorage.getItem('token')
    const [messageInfo,setMessageInfo] = useState([]);
    const navigate = useNavigate();
    //active menu
    const dispatch = useDispatch();
    const activePath = "message";
    useEffect(() => {
        dispatch(activeMenu(activePath));
        loadMessageList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu

    
    const loadMessageList = () =>{
      messageList(authtoken).then( (res) => {
        let i = 1;
        setMessageInfo(
                res.data.map( (row) => (
                  {
                    index: i++,
                    key: row.msg_id,
                    read: row.read_status,
                    description: row.msg_description,
                    note: row.msg_note,
                    date_send: row.date_send,
                    date_read: row.date_read,
                    toggle:true
                  })
                ));
      }).catch( err => {
        dispatch(logout())
        navigate("/");
        // console.log(err.response.data.msg)
      });
    }
    
    function toggleInput(item) {
      const indexToUpdate = messageInfo.findIndex((index) => index.key === item.key);
      const updatedToggle = [...messageInfo]; // creates a copy of the array

      updatedToggle[indexToUpdate].toggle = false;
      setMessageInfo(updatedToggle);
    }

    function toggleSave(item) {
      const idLoading = toast.loading("Please wait...")
      axios.post(process.env.REACT_APP_API+'/message-note',
      { 
        key: item.key,
        note: item.note
      },
      {
          headers:{ authtoken }
      }
      ).then(res => {
          messageListUnread(authtoken).then( (res) => {
            setCounter(res.data.length)
            const indexToUpdate = messageInfo.findIndex((index) => index.key === item.key);
            const updatedToggle = [...messageInfo]; // creates a copy of the array
      
            updatedToggle[indexToUpdate].toggle = true;
            setMessageInfo(updatedToggle);
            loadMessageList();
            toast.update(idLoading, {
              render: 'Note completion ✅',
              type: toast.TYPE.SUCCESS,
              autoClose: 5000,
              closeButton: true,
              isLoading: false
           });
          }).catch( err => {
            toast.error(err.response.data.msg)
          });
      }).catch(err => {
        toast.error(err.response.data.msg)
      })
    }
  
    function handleChange(e,item) {
      const indexToUpdate = messageInfo.findIndex((index) => index.key === item.key);
      const updatedNote = [...messageInfo]; // creates a copy of the array

      updatedNote[indexToUpdate].note = e.target.value;
      setMessageInfo(updatedNote);
    }

    const loadNewMessage = () => {
      const idLoading = toast.loading("Please wait...")
      setTimeout(() => {
        loadMessageList();
        toast.update(idLoading, {
          render: 'New Message ✅',
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
       
      },1000);
     
    }
  
    const columns = [
      {
        title: '#',
        key: 'key',
        dataIndex: 'index',
        align: 'center',
        width: '5%',
        sorter: (a, b) => b.index - a.index,
      },
      {
        title: 'Read',
        dataIndex: 'read',
        align: 'center',
        width: '5%',
        sorter: (a, b) => b.read - a.read,
        render: (text) => {  
          let iconClass = (text === 1) ? <EyeFilled title="Read" style={{fontSize:'30px',color:'#2b9348'}} /> : <EyeInvisibleFilled title="Unread" style={{fontSize:'30px',color:'#f94144'}} />;
          return( 
            <>{iconClass}</>
          )}
      },
      {
        title: 'Date Send', 
        dataIndex: 'date_send',
        width: '20%',
        render: (text) => <Moment format="lll">{text}</Moment>,
      },
      {
        title: 'Date Read', 
        dataIndex: 'date_read',
        width: '20%',
        render: (text) => (text === '0000-00-00 00:00:00')?'':<Moment format="lll">{text}</Moment>,
      },
      {
        title: 'Description', 
        dataIndex: 'description',
        width: '30%',
        render: (text) => <div>{text}</div>,
      },
      {
        title: 'Note',
        width: '20%',
        render: (info) => {
          return (
            <>
            {info.toggle ? (
              <div>
                <div style={{cursor:'pointer'}} className="btn-group" onDoubleClick={ () => toggleInput(info)}>
                    {((info.note)?"":<i style={{fontSize:'20px'}} className="far fa-hand-point-up"></i>)}
                    <div className="ml-2">{((info.note)?info.note:"Double Click For Note")}</div>
                </div>
              </div>
            ) : (
              <div className="shadow-none d-flex align-items-center flex-column">
                <textarea rows="2" cols="3" className="shadow-none form-control" value={info.note} onChange={ e => handleChange(e,info) }></textarea>
                <button type="button" className="shadow-none btn btn-outline-secondary btn-sm btn-block" onClick={ () => toggleSave(info) }>Save</button>
              </div>
            )}
            </>
            );
        }
      },
      // {
      //     title: 'Last login', 
      //     dataIndex: 'lastLogin',
      //     // render: (text) => <Moment format="DD/MM/YYYY hh:mm:ss">{text}</Moment>,
      // },
      // {
      //   key: 'key',
      //   align: 'center',
      //   render: (info) => <div className="shadow-none d-flex justify-content-center"><EditOutlined className="shadow-none btn text-sm text-info" /><div style={{borderRight:'solid'}} ></div><DeleteOutlined className="shadow-none btn text-sm text-danger" /> </div>
      // }
    ];
      
  return (
    <main>
    <div className="shadow-none container-fluid">
        <h1 className="shadow-none mt-4">Message</h1>
        <div align="right">
            <button type="button" className="shadow-none btn btn-success" name="load-new-message" onClick={ () => loadNewMessage() } >Load New Message</button>
        </div>
        <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={messageInfo} />
    </div>
</main>
  )
}

export default Message