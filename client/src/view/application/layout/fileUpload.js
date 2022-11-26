
import React, { useState } from 'react';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import axios from 'axios';
import Resizer from "react-image-file-resizer";
const FileUpload = ({ formData, setFormData }) => {
    const profile = (formData.image)?JSON.parse(formData.image):"";
    const public_id = profile.public_id;
    const authtoken = localStorage.getItem('token')
    const [loaddingProfile,setLoaddingProfile] = useState(false);
    const handleImageFile = (e) => {
        const files = e.target.files;
        
        if(files){
            setLoaddingProfile(true)
            if(public_id){
                axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
                { public_id },
                {
                    headers:{ authtoken }
                }
                ).then(res => {
                    setFormData({...formData, image:""})
                }).catch(err => {
                    console.log(err)
                });
            }

            Resizer.imageFileResizer(
                files[0],
                720,
                720,
                "JPEG",
                100,
                0,
                (uri) => {
                    axios.post(process.env.REACT_APP_API+'/cloudinary-image',
                    { 
                        image: uri
                    },
                    {
                        headers:{ authtoken }
                    }
                    ).then(res => {
                        setFormData({...formData, image:JSON.stringify(res.data)})
                        setLoaddingProfile(false)
                    }).catch(err => {
                        console.log(err)
                    })
                },
                "base64"
            )

        }
    }

    const handleImageFileRemove = (public_id) => {
        setLoaddingProfile(true)
        axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
        { public_id },
        {
            headers:{ authtoken }
        }
        ).then(res => {
            setFormData({...formData, image:""})
            setLoaddingProfile(false)
        }).catch(err => {
            console.log(err)
        });
    }
  return (
    <>
    <div className="form-group">
        <input 
        accept="image/*"
        id="icon-button-file"
        type="file"
        name="image"
        onChange = { handleImageFile } 
        hidden />
        <label htmlFor="icon-button-file" style={{backgroundColor:(loaddingProfile)?"":"#e0e0e0",borderRadius:"50%"}}>
            <IconButton color="primary" aria-label="upload picture" component="span">
            {(loaddingProfile)?<LoadingOutlined style={{fontSize: 24}} ><Spin/></LoadingOutlined>:<PhotoCamera/>}
            </IconButton>
        </label>
    </div>
    { (profile.url)?(
    <div className="form-group text-center">
    <span className="avatar-item">
        <Badge count="X" title="remove" onClick={ () => handleImageFileRemove(public_id) } style={{cursor:"pointer"}}>
            <Avatar src={profile.url} shape="square" size={250} icon={<UserOutlined />} />
        </Badge>
    </span>
    </div>
    ):""}
    </>
  )
}
export default FileUpload;