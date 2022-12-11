import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import FileUpload from '../fileUpload';
import { Section,Prop,Article } from "../generic";
import ReactLoading from 'react-loading';
import { Radio } from 'antd';
//Functions
import { registerHandler } from '../../../../function/auth'
//active menu
import { activeMenu } from '../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Resizer from "react-image-file-resizer";
const Register = () => {

  const authtoken = localStorage.getItem('token')

   //active menu
   const dispatch = useDispatch();
   const activePath = "user";
   useEffect(() => {
       dispatch(activeMenu(activePath));
   },[dispatch])
   //active menu

  const navigate = useNavigate();
  const [profile,setProfile] = useState();
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
      password: '',
      password2: '',
      role: ''
  });

  const { name, surname, username, password, password2, role } = formData;
  const onChange = (e) =>{
    setFormData({ ...formData,[e.target.name]:e.target.value });
  }
  const onChangeRole = ({ target: { value } }) => {
    setFormData({ ...formData, role:value });
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    if(password !== password2){
      toast.warning('Password is not match.')
    }else if(role === ""){
      toast.warning('Please choose role.')
    }else{
        if(profile){
        setLoading(true);
        setUploading('Uploading To Cloudinary . . .');
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
                        insertUser(res);
                    }).catch(err => {
                        console.log(err)
                    })
                },
                "base64"
            )
        }else{
          setLoading(true);
          insertUser();
        }

    }
  }

  const insertUser = (res) => {
      setUploading('Uploading Info To Database . . .');
      const image = (res)?JSON.stringify(res.data):'';
      const newUser = {
        name,
        surname,
        username,
        image: image,
        password,
        role
      }

      registerHandler(newUser).then(res =>{
        setTimeout(function(){
        setLoading(false);
        toast.success(res.data);
        navigate("/application/user/");
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
            <h1 className="mt-4">Register</h1>
            <div className="col-md-6 offset-md-3">
            <form onSubmit={ e => onSubmit(e) }>
              <input className="form-control mb-3" type="text" name="name" autoFocus placeholder="name" autoComplete="off" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="text" name="surname" placeholder="surname" autoComplete="off" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="text" name="username" placeholder="username" autoComplete="off" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="password" name="password" placeholder="password" autoComplete="off" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="password" name="password2" placeholder="confirm password" autoComplete="off" required onChange={ e => onChange(e) } />
              <Radio.Group className="mb-3" options={roles} onChange={ onChangeRole } name="role" value={role} optionType="button"/>
              <FileUpload setProfile = { setProfile } />
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

export default Register