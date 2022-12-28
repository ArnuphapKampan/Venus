import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import FileUpload from '../../fileUpload';
import ModalChangePassword from './modal';

import { Section,Prop,Article } from "../../generic";
import ReactLoading from 'react-loading';
import { Radio } from 'antd';
//Functions
import { updateHandler, handlerGetInfoEditUser } from '../../../../../function/auth'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Resizer from "react-image-file-resizer";
const EditUser = () => {
  const params = useParams();
  const userID = params.userID;
  const authtoken = localStorage.getItem('token')

   //active menu
   const dispatch = useDispatch();
   const activePath = "user";
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
  const roles = [
    { label: 'STAFF', value: 'staff' },
    { label: 'ADMIN', value: 'admin' },
  ];
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
  const onChangeRole = ({ target: { value } }) => {
    setFormData({ ...formData, role:value });
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    const idLoading = toast.loading("Please wait...")
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
              toast.update(idLoading, {render: 'Removed Image at Cloudinary Successful ✅'});
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
                        toast.update(idLoading, {render: 'Uploaded new profile Successful ✅'});
                        updateUser(res,idLoading);
                    }).catch(err => {
                        console.log(err.response.data.msg)
                    })
                },
                "base64"
            )
        }else if(publicID && profileOld === 'delete'){
          setLoading(true);
          setProfileOld('');
          setUploading('Uploading To Cloudinary . . .');
          axios.post(process.env.REACT_APP_API+'/cloudinary-remove',
          { publicID },
          {
              headers:{ authtoken }
          }
          ).then(res => {
            toast.update(idLoading, {render: 'Removed Image at Cloudinary Successful ✅'});
            updateUser(false,idLoading);
          }).catch(err => {
            console.log(err)
          });
        }else{
          setLoading(true);
          updateUser(false,idLoading);
        }
  }

  const updateUser = (res,idLoading) => {
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
        toast.update(idLoading, {
          render: 'Updated user information successful',
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
        navigate("/application/user/");
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
            <h1 className="shadow-none mt-4">Edit User</h1>
            <div className="shadow-none col-md-6 offset-md-3">
            <form onSubmit={ e => onSubmit(e) }>
              Name:
              <input className="shadow-none form-control shadow-none mb-3" type="text" name="name" autoFocus placeholder="name" autoComplete="off" value={name} required onChange={ e => onChange(e) } />
              Surname:
              <input className="shadow-none form-control shadow-none mb-3" type="text" name="surname" placeholder="surname" autoComplete="off" value={surname} required onChange={ e => onChange(e) } />
              Username:
              <input className="shadow-none form-control shadow-none mb-3" type="text" name="username" placeholder="username" autoComplete="off" value={username} required onChange={ e => onChange(e) } />
              <Radio.Group className="shadow-none mb-3" options={roles} onChange={ onChangeRole } name="role" value={role} optionType="button"/>
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
              (<button className="shadow-none form-control shadow-none mb-3 btn btn-success" type="submit" name="submit">SAVE</button>)}
            </form>
            </div>
            </div>
        </div>
    </main>
  )
}

export default EditUser