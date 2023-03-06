import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
//active menu
import { activeMenu, logout } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
//table
import { Table, Dropdown } from 'antd';
import { Avatar,Image } from 'antd';
import Moment from 'react-moment';
import { Switch, Modal } from 'antd';
import { DeleteOutlined, DownCircleFilled } from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ExclamationCircleOutlined } from '@ant-design/icons';
//Functions
import { handlerRemove } from '../../../../../function/gallery'
//query info
import { galleryList } from '../../../../../query/gallery/galleryList';
//css
import '../../../../css/user.css';
const GalleryList = () => {

    const [infoUserList,setInfoUserList] = useState([])
    const authtoken = localStorage.getItem('token')

    //active menu
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activePath = "gallery";
    useEffect(() => {
        dispatch(activeMenu(activePath));
        loadGalleryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu


    const loadGalleryList = () =>{
      galleryList(authtoken).then( (res) => {
        setInfoUserList(
                res.data.map( (row) => (
                    {
                        key: row.id,
                        image: row.image,
                        update_date: row.update_date,
                        enable: row.enable,
                        picture: row.picture,
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

      axios.post(process.env.REACT_APP_API+'/gallery-enable',
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
        content: `Do you want to delete Picture ? `,
        onOk: () => { onClickHandlerRemove(info)  },
        okText: 'Confirm',
        cancelText: 'Cancel',
      });
    }

    const onClickHandlerRemove = (info) => {
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
             galleryRemove(info,idLoading)
          }, 2000)
        }).catch(err => {
          dispatch(logout())
          navigate("/");
          // console.log(err.response.data.msg)
        });
      }else{
        galleryRemove(info,idLoading)
      }
    }

    const galleryRemove = (info,idLoading) =>{
      handlerRemove(info.key,authtoken).then((res) => {
        toast.update(idLoading, {
          render: "Remove Picture Successful ✅",
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
       loadGalleryList();
      }).catch((err) =>{
        toast.error("Remove Error")
        // console.log(err.response.data.msg)
      })
    }





    const columns = [
        {
          title: 'Picture',
          key: 'id',
          dataIndex: 'picture',
          render: (text) => <Avatar shape="square" size={50} src={<Image src={(text)?text:'https://res.cloudinary.com/djcea5fgx/image/upload/v1670595775/no-image_sdhwwa.jpg'} />} />
        },
        {
            title: 'Date', 
            dataIndex: 'update_date',
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
            <h1 className="shadow-none mt-4">Gallery List</h1>
            <div align="right">
              <NavLink className="shadow-none nav-link" align="right" to="galleryCreate/" ><button type="button" className="shadow-none btn btn-success" name="btn-register" > <i className="	fas fa-plus"></i> New Picture</button></NavLink>
            </div>
              <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={infoUserList} />
        </div>
    </main>
  )
}

export default GalleryList