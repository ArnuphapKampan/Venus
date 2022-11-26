import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
//Functions
import { registerHandler } from '../../../../function/auth'
//active menu
import { activeMenu } from '../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
const Register = () => {

   //active menu
   const dispatch = useDispatch();
   const activePath = "user";
   useEffect(() => {
       dispatch(activeMenu(activePath));
   },[dispatch])
   //active menu

  const navigate = useNavigate();
  const [formData,setFormData] = useState({
      name: '',
      surname: '',
      username: '',
      password: '',
      password2: ''
  });

  const { name, surname, username, password, password2 } = formData;
  const onChange = (e) =>{
    setFormData({ ...formData,[e.target.name]:e.target.value });
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(password !== password2){
      toast.warning('Password is not match')
    }else{
      const newUser = {
        name,
        surname,
        username,
        password
      }
      registerHandler(newUser).then(res =>{
        toast.success(res.data);
        navigate("/application/user/");

      }).catch(err => {
        toast.error(err.response.data.msg)
      })
    }
  }

  return (
    <main>
        <div className="container-fluid">
            <div className="container">
            <h1 className="mt-4">Register</h1>
            <div className="col-md-6 offset-md-3">
            <form onSubmit={ e => onSubmit(e) }>
              <input className="form-control mb-3" type="text" name="name" autoFocus placeholder="name" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="text" name="surname" placeholder="surname" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="text" name="username" placeholder="username" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="password" name="password" placeholder="password" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="password" name="password2" placeholder="confirm password" required onChange={ e => onChange(e) } />
              <input className="form-control mb-3" type="file" name="image" onChange={ e => onChange(e) } />
              <button className="form-control mb-3 btn btn-success" type="submit" name="submit">SAVE</button>
            </form>
            </div>
            </div>
        </div>
    </main>
  )
}

export default Register