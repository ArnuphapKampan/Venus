
import React, { useState } from 'react';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const FileUploadLocation = ({ setLocationImage }) => {
   
    const [loaddingLocationImage,setLoaddingLocationImage] = useState(false);
    const [preImage, setPreImage] = useState();

    const preView = (e) => {
        setLoaddingLocationImage(true)
        setLocationImage(e.target.files);
        setTimeout(function(){
            setPreImage(URL.createObjectURL(e.target.files[0]))
            setLoaddingLocationImage(false)
        }, 500); 
        
        
    }

    const preViewRemove  = (e) => {
        document.getElementById("icon-button-file").value = "";
        setPreImage();
        setLocationImage();
    }

  return (
    <>
    <div className="shadow-none form-group">
        <input 
        accept="image/*"
        id="icon-button-file"
        type="file"
        name="image"
        onChange = { preView } 
        hidden />
        <label htmlFor="icon-button-file" style={{backgroundColor:(loaddingLocationImage)?"":"#e0e0e0",borderRadius:"50%"}}>
            <IconButton color="primary" aria-label="upload picture" component="span">
            {(loaddingLocationImage)?<LoadingOutlined style={{fontSize: 24}} ><Spin/></LoadingOutlined>:<PhotoCamera/>}
            </IconButton>
        </label>
    </div>
    { (preImage)?(
    <div className="shadow-none form-group text-center">
    <span className="shadow-none avatar-item">
        <Badge count="X" title="remove" onClick={ preViewRemove  } style={{cursor:"pointer"}}>
            <Avatar src={preImage} shape="square" size={250} icon={<UserOutlined />} />
        </Badge>
    </span>
    </div>
    ):""}
    </>
  )
}
export default FileUploadLocation;