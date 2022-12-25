import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
//table
import { Table, Tag } from 'antd';
import { Avatar,Image } from 'antd';
import { Switch, Modal } from 'antd';
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ExclamationCircleOutlined } from '@ant-design/icons';
//Functions
import { handlerRemove } from '../../../../../function/auth'
//query info
import { locationList } from '../../../../../query/location/locationList';
const LocationList = () => {

    const [infoUserList,setInfoUserList] = useState([])
    const authtoken = localStorage.getItem('token')

    //active menu
    const dispatch = useDispatch();
    const activePath = "mapManage";
    useEffect(() => {
        dispatch(activeMenu(activePath));
        loadLocationList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu


    const loadLocationList = () =>{
      locationList(authtoken).then( (res) => {
        setInfoUserList(
                res.data.map( (row) => (
                    {
                        key: row.location_id,
                        image: row.image,
                        title: row.location_title,
                        detail: row.location_detail,
                        location: {latitude:row.latitude,longitude:row.longitude},
                        enable: row.enable,
                        public_id: row.public_id,
                        marker: JSON.parse(row.setting_marker)
                    })
                ));
      }).catch( err => {
        console.log(err.response.data.msg)
      });
    }

    const onToggleEnable = (key,event) => {
      const enable = (event)?"enable":"disable";

      axios.post(process.env.REACT_APP_API+'/location-enable',
                    { 
                      key: key,
                      enable: enable
                    },
                    {
                        headers:{ authtoken }
                    }
                    ).then(res => {
                      toast.success("Change status successful");
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
      if(info.public_id){
        toast.warning("Removing Image at Cloudinary . . .")
        const publicID = info.public_id;
        axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
        { publicID },
        {
            headers:{ authtoken }
        }
        ).then(res => {
           toast.success("Removed Image at Cloudinary Successful")
           userRemove(info)
        }).catch(err => {
            console.log(err.response.data.msg)
        });
      }else{
        userRemove(info)
      }
    }

    const userRemove = (info) =>{
      handlerRemove(info.key,authtoken).then((res) => {
        toast.success("Remove User Successful")
        loadLocationList();
      }).catch((err) =>{
        toast.error("Remove Error")
        console.log(err.response.data.msg)
      })
    }





    const columns = [
      {
        title: 'Image',
        key: 'id',
        dataIndex: 'image',
        render: (text) => <Avatar shape="square" size={50} src={<Image src={(text)?text:'https://res.cloudinary.com/djcea5fgx/image/upload/v1670595775/no-image_sdhwwa.jpg'} />} />
      },
      {
        title: 'Marker', 
        dataIndex: 'marker',
        render: (info) => <h1><i className={`${info.icon} ${info.class}`} style={{color:info.color}}></i></h1>
      },
      {
        title: 'Title',
        dataIndex: 'title',
      },
      {
        title: 'Detail', 
        dataIndex: 'detail',
       
      },
      {
        title: 'Location', 
        dataIndex: 'location',
        render: (info) => {
                            return (
                              <>
                                <Tag color="geekblue" >
                                  Lat: {info.latitude}
                                </Tag>
                                <br></br>
                                <Tag color="green" >
                                  lon: {info.longitude}
                                </Tag>
                              </>
                              );
                          }
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
        render: (info) => <div className="d-flex justify-content-center">  <NavLink className="nav-link" align="right" to={`editlocation/${info.key}`} ><EditOutlined className="btn text-sm text-info" /></NavLink><div style={{borderRight:'solid'}} ></div><DeleteOutlined onClick={ (e) => { confirmRemove(info) } } className="btn text-sm text-danger" /> </div>
      }
    ];
      
  return (
    <main>
        <div className="container-fluid">
            <h1 className="mt-4">Location List</h1>
            <div align="right">
                <button type="button" className="btn btn-success" name="btn-register" ><NavLink className="nav-link" align="right" to="location/" >Add Location</NavLink></button>
            </div>
              <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={infoUserList} />
        </div>
    </main>
  )
}

export default LocationList