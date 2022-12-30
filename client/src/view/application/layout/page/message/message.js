import React, { useEffect,useState } from 'react'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
// import Moment from 'react-moment';
import { Table } from 'antd';
// import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const Message = () => {

    //active menu
    const dispatch = useDispatch();
    const activePath = "message";
    useEffect(() => {
        dispatch(activeMenu(activePath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu

    const [messageInfo,setMessageImfo] = useState([
      {
        key: '1',
        read: '0',
        description: 'ติดต่อกลับหน่อยครับมีเรื่องสอบถาม',
        note: '',
        toggle:true
      },
      {
        key: '2',
        read: '1',
        description: 'สอบถามราคาหน่อยครับ',
        note: 'ติดต่อกลับแล้ว แต่ไม่รับสาย',
        toggle:true
      }
    ])


    function toggleInput(item) {
      const indexToUpdate = messageInfo.findIndex((index) => index.key === item.key);
      const updatedToggle = [...messageInfo]; // creates a copy of the array

      updatedToggle[indexToUpdate].toggle = false;
      setMessageImfo(updatedToggle);
    }

    function toggleSave(item) {
      const indexToUpdate = messageInfo.findIndex((index) => index.key === item.key);
      const updatedToggle = [...messageInfo]; // creates a copy of the array

      updatedToggle[indexToUpdate].toggle = true;
      setMessageImfo(updatedToggle);
    }
  
    function handleChange(e,item) {
      const indexToUpdate = messageInfo.findIndex((index) => index.key === item.key);
      const updatedNote = [...messageInfo]; // creates a copy of the array

      updatedNote[indexToUpdate].note = e.target.value;
      setMessageImfo(updatedNote);
    }
  

    const columns = [
      {
        title: 'Read',
        key: 'key',
        dataIndex: 'read',
        align: 'center',
        render: (text) =>  <i style={{fontSize:'20px'}} className={(text === '1')?"far fa-eye text-success":"far fa-eye-slash text-danger"} title={(text === '1')?"Read":"Unread"}></i>
      },
      {
        title: 'Description', 
        dataIndex: 'description',
      },
      {
        title: 'Note',
        width: '30%',
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
          <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={messageInfo} />
    </div>
</main>
  )
}

export default Message