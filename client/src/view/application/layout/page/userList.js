import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
//active menu
import { activeMenu } from '../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
//table
import { Table, Tag } from 'antd';
import { Avatar,Image } from 'antd';
import Moment from 'react-moment';
//query info
import { userLists } from '../../../../query/userLists';
const UserList = () => {

    const [infoUserList,setInfoUserList] = useState([])
    
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
                            lastLogin: row.update_date
                        })
                    ));
          }).catch( err => {
            console.log(err)
          });
    
    },[dispatch]);
    //active menu

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
          key: 'id',
          dataIndex: 'name',
          
        },
        {
          title: 'Username', 
          key: 'id',
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
            key: 'id',
            dataIndex: 'lastLogin',
            render: (text) => <Moment format="DD/MM/YYYY hh:mm:ss">{text}</Moment>,
        },
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