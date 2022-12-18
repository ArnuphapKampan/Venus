import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import FileUpload from '../../fileUpload';
import ModalChangePassword from './modal';

import { Section,Prop,Article } from "../../generic";
import ReactLoading from 'react-loading';
// import { Radio } from 'antd';
//Functions
import { updateHandler, handlerGetInfoEditUser } from '../../../../../function/auth'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Resizer from "react-image-file-resizer";
const Profile = () => {
  const params = useParams();
  const userID = params.userID;
  const authtoken = localStorage.getItem('token')

   //active menu
   const dispatch = useDispatch();
   const activePath = "dashboard";
   useEffect(() => {
        dispatch(activeMenu(activePath));
      
        handlerGetInfoEditUser(userID,authtoken).then((res) => {
          setFormData({
            name: res.data[0].name,
            surname: res.data[0].surname,
            username: res.data[0].username,
            role: res.data[0].role
          })
          setImageURL(res.data[0].profile)
          setProfileOld(res.data[0].image)
          setPublicID(res.data[0].public_id)
        }).catch(err => {
          console.log(err.response.data.msg)
        })

   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[dispatch])
   //active menu

  const navigate = useNavigate();
  const [profile,setProfile] = useState();
  const [publicID,setPublicID] = useState();
  const [profileOld,setProfileOld] = useState('');
  const [imageURL,setImageURL] = useState();
  const [loading,setLoading] = useState(false);
  const [uploading,setUploading] = useState('');
  // const roles = [
  //   { label: 'STAFF', value: 'staff' },
  //   { label: 'ADMIN', value: 'admin' },
  // ];
  const [formData,setFormData] = useState({
      name: '',
      surname: '',
      username: '',
      role: ''
  });

  const { name, surname, username, role } = formData;
  const onChange = (e) =>{
    setFormData({ ...formData,[e.target.name]:e.target.value });
  }
  // const onChangeRole = ({ target: { value } }) => {
  //   setFormData({ ...formData, role:value });
  // };

  const onSubmit = (e) =>{
    e.preventDefault();
        if(profile){
        setLoading(true);
        setUploading('Uploading To Cloudinary . . .');
        if(publicID){
          axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
          { publicID },
          {
              headers:{ authtoken }
          }
          ).then(res => {
              toast.success("Removed Image at Cloudinary Successful")
          }).catch(err => {
            console.log(err)
          });
        }
        Resizer.imageFileResizer(
              profile[0],
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
                        toast.success('Uploaded new profile Successful');
                        updateUser(res);
                    }).catch(err => {
                        console.log(err.response.data.msg)
                    })
                },
                "base64"
            )
        }else if(publicID && profileOld === 'delete'){
          setLoading(true);
          setUploading('Uploading To Cloudinary . . .');
          axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
          { publicID },
          {
              headers:{ authtoken }
          }
          ).then(res => {
            toast.success("Removed Image at Cloudinary Successful")
            updateUser(res);
          }).catch(err => {
            console.log(err)
          });
        }else{
          setLoading(true);
          updateUser();
        }
  }

  const updateUser = (res) => {
      setUploading('Uploading Info To Database . . .');
      const image = (res)?JSON.stringify(res.data):profileOld;
      const newUser = {
        id:userID,
        name,
        surname,
        username,
        image: image,
        role
      }

      updateHandler(newUser, authtoken).then(res =>{
        setTimeout(function(){
        setLoading(false);
        toast.success('Updated user information successful');
        navigate("/application/");
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
            <h1 className="mt-4">Profile</h1>
            <div className="col-md-6 offset-md-3">
            <form onSubmit={ e => onSubmit(e) }>
              Name:
              <input className="form-control mb-3" type="text" name="name" autoFocus placeholder="name" autoComplete="off" value={name} required onChange={ e => onChange(e) } />
              Surname:
              <input className="form-control mb-3" type="text" name="surname" placeholder="surname" autoComplete="off" value={surname} required onChange={ e => onChange(e) } />
              Username:
              <input className="form-control mb-3" type="text" name="username" placeholder="username" autoComplete="off" value={username} required onChange={ e => onChange(e) } />
              {/* <Radio.Group className="mb-3" options={roles} onChange={ onChangeRole } name="role" value={role} optionType="button" /> */}
              <ModalChangePassword userID = {userID} authtoken = { authtoken } />
              <FileUpload setProfile = { setProfile } imageURL = { imageURL } setImageURL = { setImageURL } setProfileOld = { setProfileOld } />
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

export default Profile