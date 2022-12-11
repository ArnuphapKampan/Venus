
import React, { useState } from 'react';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const FileUpload = ({ setProfile }) => {
    const [loaddingProfile,setLoaddingProfile] = useState(false);
    const [preImage, setPreImage] = useState();

    const preView = (e) => {
        setLoaddingProfile(true)
        setProfile(e.target.files);
        setTimeout(function(){
            setPreImage(URL.createObjectURL(e.target.files[0]))
            setLoaddingProfile(false)
        }, 500); 
        
        
    }

    const preViewRemove  = (e) => {
        document.getElementById("icon-button-file").value = "";
        setPreImage();
        setProfile();
    }

  return (
    <>
    <div className="form-group">
        <input 
        accept="image/*"
        id="icon-button-file"
        type="file"
        name="image"
        onChange = { preView } 
        hidden />
        <label htmlFor="icon-button-file" style={{backgroundColor:(loaddingProfile)?"":"#e0e0e0",borderRadius:"50%"}}>
            <IconButton color="primary" aria-label="upload picture" component="span">
            {(loaddingProfile)?<LoadingOutlined style={{fontSize: 24}} ><Spin/></LoadingOutlined>:<PhotoCamera/>}
            </IconButton>
        </label>
    </div>
    { (preImage)?(
    <div className="form-group text-center">
    <span className="avatar-item">
        <Badge count="X" title="remove" onClick={ preViewRemove  } style={{cursor:"pointer"}}>
            <Avatar src={preImage} shape="square" size={250} icon={<UserOutlined />} />
        </Badge>
    </span>
    </div>
    ):""}
    </>
  )
}
export default FileUpload;