import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
//active menu
import { activeMenu,logout } from '../../../../../reducer/userReducer';
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
import { handlerLocationRemove } from '../../../../../function/location'
//query info
import { locationList } from '../../../../../query/location/locationList';
const LocationList = () => {

    const [infoUserList,setInfoUserList] = useState([])
    const authtoken = localStorage.getItem('token')

    //active menu
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        dispatch(logout())
        navigate("/");
        // console.log(err.response.data.msg)
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
        content: `Do you want to delete location? `,
        onOk: () => { onClickHandlerRemove(info)  },
        okText: 'Confirm',
        cancelText: 'Cancel',
      });
    }

    const onClickHandlerRemove = (info) => {
      const idLoading = toast.loading("Please wait...")
      if(info.public_id){
        toast.update(idLoading, {render: 'Removing Image at Cloudinary...'});
        const publicID = info.public_id;
        axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
        { publicID },
        {
            headers:{ authtoken }
        }
        ).then(res => {
           toast.update(idLoading, {render: 'Removed Image at Cloudinary Successful ✅'});
           locationRemove(info,idLoading)
        }).catch(err => {
          dispatch(logout())
          navigate("/");
            // console.log(err.response.data.msg)
        });
      }else{
        locationRemove(info,idLoading)
      }
    }

    const locationRemove = (info,idLoading) =>{
      handlerLocationRemove(info.key,authtoken).then((res) => {
        toast.update(idLoading, {
          render: "Remove Location Successful ✅",
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
        loadLocationList();
      }).catch((err) =>{
        toast.error("Remove Error")
        // console.log(err.response.data.msg)
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
        render: (info) => <div className="shadow-none d-flex justify-content-center">  <NavLink className="shadow-none nav-link" align="right" to={`editlocation/${info.key}`} ><EditOutlined className="shadow-none btn text-sm text-info" /></NavLink><div style={{borderRight:'solid'}} ></div><DeleteOutlined onClick={ (e) => { confirmRemove(info) } } className="shadow-none btn text-sm text-danger" /> </div>
      }
    ];
      
  return (
    <main>
        <div className="shadow-none container-fluid">
            <h1 className="shadow-none mt-4">Location List</h1>
            <div align="right">
                <NavLink className="shadow-none nav-link" align="right" to="location/" ><button type="button" className="shadow-none btn btn-success" name="btn-register" >Add Location</button></NavLink>
            </div>
              <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={infoUserList} />
        </div>
    </main>
  )
}

export default LocationList