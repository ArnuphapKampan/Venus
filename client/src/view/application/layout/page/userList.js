import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
//active menu
import { activeMenu } from '../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
//table
import { Table, Tag } from 'antd';
import { Avatar,Image } from 'antd';
import Moment from 'react-moment';
import { Switch, Modal } from 'antd';
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ExclamationCircleOutlined } from '@ant-design/icons';
//Functions
import { handlerRemove } from '../../../../function/auth'
//query info
import { userLists } from '../../../../query/userLists';
const UserList = () => {

    const [infoUserList,setInfoUserList] = useState([])
    const authtoken = localStorage.getItem('token')

    //active menu
    const dispatch = useDispatch();
    const activePath = "user";
    useEffect(() => {
        const authtoken = localStorage.getItem('token')
        dispatch(activeMenu(activePath));
        userLists(authtoken).then( (res) => {
          setInfoUserList(
                  res.data.map( (row) => (
                      {
                          key: row.id,
                          profile: row.profile,
                          name: row.name+' '+row.surname,
                          username: row.username,
                          role: row.role,
                          lastLogin: row.update_date,
                          enable: row.enable,
                          public_id: row.public_id
                      })
                  ));
        }).catch( err => {
          console.log(err)
        });
    
    },[dispatch]);
    //active menu


    const loadUserList = () =>{
      userLists(authtoken).then( (res) => {
        setInfoUserList(
                res.data.map( (row) => (
                    {
                        key: row.id,
                        profile: row.profile,
                        name: row.name+' '+row.surname,
                        username: row.username,
                        role: row.role,
                        lastLogin: row.update_date,
                        enable: row.enable,
                        public_id: row.public_id
                    })
                ));
      }).catch( err => {
        console.log(err)
      });
    }

    const onToggleEnable = (key,event) => {
      const enable = (event)?"enable":"disable";

      axios.post(process.env.REACT_APP_API+'/user-approv',
                    { 
                      key: key,
                      enable: enable
                    },
                    {
                        headers:{ authtoken }
                    }
                    ).then(res => {
                      (res.data.changedRows >= 1)?toast.success("Change status successful"):toast.warning("Cannot change admin status");
                    }).catch(err => {
                      toast.error(err.data)
                    })
    }

    const confirmRemove = (info) => {
      Modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: `Do you want to delete Username: ${info.username} Name: ${info.name} ? `,
        onOk: () => { onClickHandlerRemove(info)  },
        okText: 'Confirm',
        cancelText: 'Cancel',
      });
    }

    const onClickHandlerRemove = (info) => {
      if(info.public_id){
        toast.warning("Removing Image at Cloudinary . . .")
        const public_id = info.public_id;
        axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
        { public_id },
        {
            headers:{ authtoken }
        }
        ).then(res => {
           toast.success("Removed Image at Cloudinary Successful")
           userRemove(info)
        }).catch(err => {
            console.log(err)
        });
      }else{
        userRemove(info)
      }
    }

    const userRemove = (info) =>{
      handlerRemove(info.key,authtoken).then((res) => {
        toast.success("Remove User Successful")
        loadUserList();
      }).catch((err) =>{
        toast.error("Remove Error")
        console.log(err.data)
      })
    }





    const columns = [
        {
          title: 'Profile',
          key: 'id',
          dataIndex: 'profile',
          render: (text) => <Avatar shape="square" size={50} src={<Image src={(text)?text:'https://res.cloudinary.com/djcea5fgx/image/upload/v1670595775/no-image_sdhwwa.jpg'} />} />
        }
        ,
        {
          title: 'Name',
          dataIndex: 'name',
          
        },
        {
          title: 'Username', 
          dataIndex: 'username',
         
        },
        {
          title: 'Role',
          key: 'role',
          dataIndex: 'role',
          render: (role) => {
            let color = role === "admin" ? 'geekblue' : 'green';
            return (
                <Tag color={color} >
                  {role.toUpperCase()}
                </Tag>
              );
          }
        },
        {
            title: 'Last login', 

            dataIndex: 'lastLogin',
            render: (text) => <Moment format="DD/MM/YYYY hh:mm:ss">{text}</Moment>,
        },
        {
          title: 'Enable',
          dataIndex: 'enable',
          key: 'id',
          render: (text,key) => <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked={(text === "enable")?"checked":""} onChange={ (e) => onToggleEnable(key.key,e) } />
        },
        {
          key: 'id',
          align: 'center',
          render: (info) => <div className="d-flex justify-content-center"> <EditOutlined className="btn text-sm text-info" /><div style={{borderRight:'solid'}} ></div><DeleteOutlined onClick={ (e) => { confirmRemove(info) } } className="btn text-sm text-danger" /> </div>
        }
      ];
      
  return (
    <main>
        <div className="container-fluid">
            <h1 className="mt-4">UserList</h1>
            <NavLink className="nav-link" align="right" to="register/" >
                <button type="button" className="btn btn-success" name="btn-register" >Create User</button>
            </NavLink>
            <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={infoUserList} />
        </div>
    </main>
  )
}

export default UserList