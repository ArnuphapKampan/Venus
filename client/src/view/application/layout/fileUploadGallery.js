
import React, { useState } from 'react';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const FileUpload = ({ setGallery,preImage,setPreImage }) => {
   
    const [loaddingProfile,setLoaddingProfile] = useState(false);

    const preView = async (e) => {
        let value = await asyncPreView(e);
        setPreImage({ ...preImage,image:value });
        setGallery({ ...preImage,image:value });
    }

    const asyncPreView = (e) => {
        return new Promise((resolve, reject) => {
            let files = [];
            setLoaddingProfile(true)
            setTimeout(function(){
                for(var i=0;i<e.target.files.length;i++){
                    files.push(e.target.files[i]);
                }
                setLoaddingProfile(false)
                resolve(files);
            }, 500); 
        })
    }

  return (
    <>
    <div className="shadow-none form-group">
        <input 
        accept="image/*"
        id="icon-button-file"
        type="file"
        name="image"
        multiple
        onChange = { preView } 
        hidden />
        <label htmlFor="icon-button-file" style={{backgroundColor:(loaddingProfile)?"":"#e0e0e0",borderRadius:"50%"}}>
            <IconButton color="primary" aria-label="upload picture" component="span">
            {(loaddingProfile)?<LoadingOutlined style={{fontSize: 24}} ><Spin/></LoadingOutlined>:<PhotoCamera/>}
            </IconButton>
        </label>
    </div>
    </>
  )
}
export default FileUpload;