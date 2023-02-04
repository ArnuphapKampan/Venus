import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
//active menu
import { activeMenu, logout } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
//table
import { Table, Tag, Dropdown } from 'antd';
import { Avatar,Image } from 'antd';
import Moment from 'react-moment';
import { Switch, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, DownCircleFilled } from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ExclamationCircleOutlined } from '@ant-design/icons';
//Functions
import { handlerRemove } from '../../../../../function/auth'
//query info
import { userLists } from '../../../../../query/userLists';
//css
import '../../../../css/user.css';
const UserList = () => {

    const [infoUserList,setInfoUserList] = useState([])
    const authtoken = localStorage.getItem('token')

    //active menu
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activePath = "user";
    useEffect(() => {
        dispatch(activeMenu(activePath));
        loadUserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        dispatch(logout())
        navigate("/");
        // console.log(err.response.data.msg)
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
                      toast.error(err.response.data.msg)
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
      if(info.role === 'admin'){ 
        toast.warning("Cannot Remove Role Admin") 
        return false;
      }
      const idLoading = toast.loading("Please wait...")
      if(info.public_id){
        const publicID = info.public_id;
        axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
        { publicID },
        {
            headers:{ authtoken }
        }
        ).then(res => {
          toast.update(idLoading, {render: 'Removed Image at Cloudinary Successful ✅'});
          setTimeout(() => {
             userRemove(info,idLoading)
          }, 2000)
        }).catch(err => {
          dispatch(logout())
          navigate("/");
          // console.log(err.response.data.msg)
        });
      }else{
        userRemove(info,idLoading)
      }
    }

    const userRemove = (info,idLoading) =>{
      handlerRemove(info.key,authtoken).then((res) => {
        toast.update(idLoading, {
          render: "Remove User Successful ✅",
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
        loadUserList();
      }).catch((err) =>{
        toast.error("Remove Error")
        // console.log(err.response.data.msg)
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
            render: (text) => <Moment format="DD/MM/YYYY HH:mm:ss">{text}</Moment>,
        },
        {
          title: 'Enable',
          dataIndex: 'enable',
          key: 'id',
          render: (text,key) => <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked={(text === "enable")?"checked":""} onChange={ (e) => onToggleEnable(key.key,e) } />
        },
        {
          key: 'id',
          align: 'center',
          render: (info) =>{ 
            const items = [
              {
                key: '1',
                label: (<NavLink style={{cursor: 'pointer'}} to={`editUser/${info.key}`} ><label  style={{padding:'0',margin:'0',width:'100px'}}>Edit</label></NavLink>),
                icon: <EditOutlined />
              },
              {
                key: '2',
                label: ('Delete'),
                icon: <DeleteOutlined />,
                onClick: () => confirmRemove(info)
              }
            ];
            return (
              <Dropdown menu={{ items }} >
                  <DownCircleFilled style={{fontSize:'20px',cursor: 'pointer',color:'#343a40'}} />
              </Dropdown>
            )
          },
        }
      ];
      
  return (
    <main>
        <div className="shadow-none container-fluid">
            <h1 className="shadow-none mt-4">User List</h1>
            <div align="right">
              <NavLink className="shadow-none nav-link" align="right" to="register/" ><button type="button" className="shadow-none btn btn-success" name="btn-register" > <i className="	fas fa-plus"></i> New User</button></NavLink>
            </div>
              <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={infoUserList} />
        </div>
    </main>
  )
}

export default UserList