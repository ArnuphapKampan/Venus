import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import FileUploadLocation from '../../fileUploadLocation';
import { Section,Prop,Article } from "../../generic";
import ReactLoading from 'react-loading';
import ModalSettingIcon from './modal';
import ModalGetLocation from './modalGetLocation';

//Functions
import { addLocationHandler } from '../../../../../function/location'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Resizer from "react-image-file-resizer";
const Location = () => {

  const authtoken = localStorage.getItem('token')

   //active menu
   const dispatch = useDispatch();
   const activePath = "mapManage";
   useEffect(() => {
       dispatch(activeMenu(activePath));
   },[dispatch])
   //active menu

   //icon setting
   const [iconLocation,setIconLocation] = useState("fas fa-map-marker-alt");
   const [classLocation,setClassLocation] = useState("text-danger");
   const [colorLocation,setColorLocation] = useState("");
   const [sizeLocation,setSizeLocation] = useState("");
   const [getLat,setGetLat] = useState("");
   const [getLon,setGetlon] = useState("");

  const navigate = useNavigate();
  const [locationImage,setLocationImage] = useState();
  const [loading,setLoading] = useState(false);
  const [uploading,setUploading] = useState('');
  const [formData,setFormData] = useState({
      title: '',
      detail: ''
  });

  const { title, detail } = formData;
  const onChange = (e) =>{
    setFormData({ ...formData,[e.target.name]:e.target.value });
  }


  const onSubmit = (e) =>{
    e.preventDefault();
    if(getLat === "" || getLon === ""){
      toast.warning('Latitude and Longitude cannot empty.')
    }else{
        if(locationImage){
        setLoading(true);
        setUploading('Uploading To Cloudinary . . .');
        Resizer.imageFileResizer(
              locationImage[0],
                720,
                720,
                "JPEG",
                100,
                0,
                (uri) => {
                    axios.post(process.env.REACT_APP_API+'/cloudinary-location-image',
                    { 
                        image: uri
                    },
                    {
                        headers:{ authtoken }
                    }
                    ).then(res => {
                        insertLocation(res);
                    }).catch(err => {
                        console.log(err.response.data.msg)
                    })
                },
                "base64"
            )
        }else{
          setLoading(true);
          insertLocation();
        }

    }
  }

  const insertLocation = (res) => {
      setUploading('Uploading Info To Database . . .');
      const image = (res)?JSON.stringify(res.data):'';
      const info = {
        title,
        detail,
        latitude:getLat,
        longitude:getLon,
        image: image,
        settingMarker: JSON.stringify({"icon":iconLocation,"class":classLocation,"color":colorLocation,"size":sizeLocation})
      }

      addLocationHandler(info,authtoken).then(res =>{
        setTimeout(function(){
        setLoading(false);
        toast.success(res.data);
        navigate("/application/mapManage/");
        }, 1500); 
      }).catch(err => {
        setLoading(false);
        toast.error(err.response.data.msg)
      })
  }


  return (
    <main>
        <div className="container-fluid">
            <div className="container">
            <h1 className="mt-4">Add Location</h1>
            <div className="col-md-6 offset-md-3">
            <form onSubmit={ e => onSubmit(e) }>
              <input className="form-control mb-3" type="text" name="title" autoFocus placeholder="Title" autoComplete="off" required onChange={ e => onChange(e) } />
              <textarea style={{ minHeight: 100 }} className="form-control mb-3" type="text" name="detail" placeholder="Detail" autoComplete="off" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="text" name="latitude" placeholder="Latitude" autoComplete="off" value={getLat} required onChange={ e => setGetLat(e.target.value) } />
              <input className="form-control mb-3" type="text" name="longitude" placeholder="Longitude" autoComplete="off" value={getLon} required onChange={ e => setGetlon(e.target.value) } />
              <div className="btn-group">
              <ModalSettingIcon iconLocation = {iconLocation} setIconLocation = {setIconLocation}  classLocation = {classLocation} setClassLocation = {setClassLocation}  colorLocation = {colorLocation} setColorLocation = {setColorLocation}  sizeLocation = {sizeLocation} setSizeLocation = {setSizeLocation} />
              <ModalGetLocation setGetLat = {setGetLat} setGetlon={setGetlon} getLat={getLat} getLon={getLon} />
              </div>
              <FileUploadLocation setLocationImage = { setLocationImage } />
              { (loading)?(
              <Section>
                  <Article>
                      <ReactLoading type={'spinningBubbles'} color="#000" />
                      <br/>
                      <Prop>{uploading}</Prop>
                  </Article>
              </Section>):
              (<button className="form-control mb-3 btn btn-success" type="submit" name="submit">SAVE</button>)}
            </form>
            </div>
            </div>
        </div>
    </main>
  )
}

export default Location