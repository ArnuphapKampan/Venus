import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import FileUpload from '../../fileUploadGallery';
import { Section,Prop,Article } from "../../generic";
import ReactLoading from 'react-loading';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
//Functions
import { addGalleryHandler } from '../../../../../function/gallery'
//active menu
import { activeMenu,logout } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Resizer from "react-image-file-resizer";
const GalleryCreate = () => {

  const authtoken = localStorage.getItem('token')

   //active menu
   const dispatch = useDispatch();
   const activePath = "gallery";
   useEffect(() => {
       dispatch(activeMenu(activePath));
   },[dispatch])
   //active menu

  const navigate = useNavigate();
  const [gallery,setGallery] = useState();
  const [loading,setLoading] = useState(false);
  const [uploading,setUploading] = useState('');
  const [preImage, setPreImage] = useState();

  const onSubmit = async (e) =>{
    e.preventDefault();

        const idLoading = toast.loading("Please wait...");
        let result = await uploadImage(idLoading);
        await insertGallery(result,idLoading);
  }


  const uploadImage = async (idLoading) =>{
    return new Promise((resolve, reject) => {
      let image = [];
      if(gallery){
        setLoading(true);
        setUploading('Uploading To Cloudinary . . .');
        let count = 1;
        for(let i = 0; i < gallery.image.length; i++){
          
          Resizer.imageFileResizer(
                gallery.image[i],
                  720,
                  720,
                  "JPEG",
                  100,
                  0,
                
                  // eslint-disable-next-line no-loop-func
                  (uri) => {
                      axios.post(process.env.REACT_APP_API+'/cloudinary-gallery-image',
                      { 
                          image: uri
                      },
                      {
                          headers:{ authtoken }
                      }
                      ).then(res => {
                          image.push(res.data);
                          toast.update(idLoading, {render: `Uploading Image ${count++}/${gallery.image.length}`});
                          
                          if(image.length === gallery.image.length){
                            resolve(image);
                          }
                      }).catch(err => {
                          dispatch(logout())
                          navigate("/");
                          // console.log(err.response.data.msg)
                      })
                  },
                  "base64"
              ) 
          }
      }
      
    })
  }
  const insertGallery = (res,idLoading) => {
      setUploading('Uploading Info To Database . . .');

      addGalleryHandler(res,authtoken).then(res =>{
        setTimeout(function(){
        setLoading(false);
        toast.update(idLoading, {
          render: res.data,
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
        navigate("/application/gallery/");
        }, 1500); 
      }).catch(err => {
        setLoading(false);
        toast.update(idLoading, {
          render: err.response.data.msg,
          type: toast.TYPE.ERROR,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
      })
  }

  const preViewRemove  = (e) => {
    let { image } = preImage; 
    image.splice(e,1);
    if(image.length === 0){
      setPreImage()
    }else{
      setPreImage({ ...preImage,image:image })
    }
    setGallery({ ...preImage,image:image })
  }

  return (
    <main>
        <div className="shadow-none container-fluid">
            <div className="shadow-none container">
              <div className="row mt-4">
                <div className="col-md-9">
                  <h1>Add Gallery</h1>
                </div>
                <div className="col-md-3" style={{textAlign:"right"}}>
                  <FileUpload setGallery = { setGallery } setPreImage = {setPreImage} preImage = {preImage} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                { (preImage)?(loading)?(
                    <Section>
                        <Article>
                            <ReactLoading type={'spinningBubbles'} color="#000" />
                            <br/>
                            <Prop>{uploading}</Prop>
                        </Article>
                    </Section>):
                    (<button style={{width:"100%"}}className="shadow-none form-control shadow-none mb-3 btn btn-success" type="submit" name="submit" onClick={e => onSubmit(e)}>UPLOAD</button>):""}
                </div>
                <div className="col-md-3"></div>
              </div>  
                { (preImage)?(
              <div className="shadow-none form-group text-center">
              {preImage.image.map((items,index) => 
               <span key={index} className="shadow-none avatar-item">
                <Badge className="m-3" count="X" title="remove" onClick={ e => preViewRemove(index) } style={{cursor:"pointer"}}>
                    <Avatar src={URL.createObjectURL(items)} shape="square" size={250} icon={<UserOutlined />} />
                </Badge>
               </span>
              )}
              </div>
              ):""}
            </div>
        </div>
    </main>
  )
}

export default GalleryCreate