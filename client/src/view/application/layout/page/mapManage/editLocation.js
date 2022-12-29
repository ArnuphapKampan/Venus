import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import FileUploadLocationEdit from '../../fileUploadLocationEdit';
import { Section,Prop,Article } from "../../generic";
import ReactLoading from 'react-loading';
//Functions
import { updateLocationHandler, handlerGetInfoEditLocation } from '../../../../../function/location'
import ModalSettingIcon from './modalEdit';
import ModalGetLocation from './modalGetLocationEdit';
//active menu
import { activeMenu,logout } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Resizer from "react-image-file-resizer";
const EditLocation = () => {
  const params = useParams();
  const locationID = params.locationID;
  const authtoken = localStorage.getItem('token')

   //active menu
   const dispatch = useDispatch();
   const activePath = "mapManage";
   useEffect(() => {
       dispatch(activeMenu(activePath));
       handlerGetInfoEditLocation(locationID,authtoken).then((res) => {
        setFormData({
          title: res.data[0].location_title,
          detail: res.data[0].location_detail
        })
        setImageURL(res.data[0].image)
        setLocationImageOld(res.data[0].location_image)
        setPublicID(res.data[0].public_id)
        //setting marker
        let setting = JSON.parse(res.data[0].setting_marker);
        setIconLocation(setting.icon);
        setClassLocation(setting.class);
        setColorLocation(setting.color);
        setSizeLocation(setting.size);
        //get lat and long coordinates
        setGetLat(res.data[0].latitude);
        setGetlon(res.data[0].longitude);
      }).catch(err => {
        dispatch(logout())
        navigate("/");
        // console.log(err.response.data.msg)
      })
     // eslint-disable-next-line react-hooks/exhaustive-deps
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
   const [publicID,setPublicID] = useState();
   const [locationImageOld,setLocationImageOld] = useState('');
   const [imageURL,setImageURL] = useState();
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
    const idLoading = toast.loading("Please wait...")
      if(locationImage){
        setLoading(true);
        setUploading('Uploading To Cloudinary . . .');
        if(publicID){
          axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
          { publicID },
          {
              headers:{ authtoken }
          }
          ).then(res => {
              toast.update(idLoading, {render: 'Removed Image at Cloudinary Successful ✅'});
          }).catch(err => {
            dispatch(logout())
            navigate("/");
            // console.log(err)
          });
        }
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
                        toast.update(idLoading, {render: 'Uploaded new Image Successful ✅'});
                        updateLocation(res,idLoading);
                    }).catch(err => {
                      dispatch(logout())
                      navigate("/");
                      // console.log(err.response.data.msg)
                    })
                },
                "base64"
            )
        }else if(publicID && locationImageOld === 'delete'){
          setLoading(true);
          setLocationImageOld('');
          setUploading('Uploading To Cloudinary . . .');
          axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
          { publicID },
          {
              headers:{ authtoken }
          }
          ).then(res => {
            
            toast.update(idLoading, {render: 'Removed Image at Cloudinary Successful ✅'});
            updateLocation(false,idLoading);
          }).catch(err => {
            dispatch(logout())
            navigate("/");
            // console.log(err)
          });
        }else{
          setLoading(true);
          updateLocation(false,idLoading);
        }
  }

  const updateLocation = (res,idLoading) => {
      setUploading('Uploading Info To Database . . .');
      const image = (res)?JSON.stringify(res.data):locationImageOld;
      const info = {
        id:locationID,
        title,
        detail,
        latitude:getLat,
        longitude:getLon,
        image: image,
        settingMarker: JSON.stringify({"icon":iconLocation,"class":classLocation,"color":colorLocation,"size":sizeLocation})
      }

      updateLocationHandler(info,authtoken).then(res =>{
        setTimeout(function(){
        setLoading(false);
        toast.update(idLoading, {
          render: 'Updated Location Successful',
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
        navigate("/application/mapManage/");
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


  return (
    <main>
        <div className="shadow-none container-fluid">
            <div className="shadow-none container">
            <h1 className="shadow-none mt-4">Edit Location</h1>
            <div className="shadow-none col-md-6 offset-md-3">
            <form onSubmit={ e => onSubmit(e) }>
              <input className="shadow-none form-control shadow-none mb-3" type="text" name="title" autoFocus placeholder="Title" autoComplete="off" value={title} required onChange={ e => onChange(e) } />
              <textarea style={{ minHeight: 100 }} className="shadow-none form-control shadow-none mb-3" type="text" name="detail" placeholder="Detail" value={detail} autoComplete="off" required onChange={ e => onChange(e) } />
              <input className="shadow-none form-control shadow-none mb-3" type="text" name="latitude" placeholder="Latitude" autoComplete="off" value={getLat} required onChange={ e => setGetLat(e.target.value) } />
              <input className="shadow-none form-control shadow-none mb-3" type="text" name="longitude" placeholder="Longitude" autoComplete="off" value={getLon} required onChange={ e => setGetlon(e.target.value) } />
              <div className="shadow-none btn-group">
              <ModalSettingIcon iconLocation = {iconLocation} setIconLocation = {setIconLocation}  classLocation = {classLocation} setClassLocation = {setClassLocation}  colorLocation = {colorLocation} setColorLocation = {setColorLocation}  sizeLocation = {sizeLocation} setSizeLocation = {setSizeLocation} />
              <ModalGetLocation setGetLat = {setGetLat} setGetlon={setGetlon} getLat={getLat} getLon={getLon} />
              </div>
              <FileUploadLocationEdit setLocationImage = { setLocationImage } imageURL = { imageURL } setImageURL = { setImageURL } setLocationImageOld = { setLocationImageOld } />
              { (loading)?(
              <Section>
                  <Article>
                      <ReactLoading type={'spinningBubbles'} color="#000" />
                      <br/>
                      <Prop>{uploading}</Prop>
                  </Article>
              </Section>):
              (<button className="shadow-none form-control shadow-none mb-3 btn btn-success" type="submit" name="submit">SAVE</button>)}
            </form>
            </div>
            </div>
        </div>
    </main>
  )
}

export default EditLocation