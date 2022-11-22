import React, { useState } from 'react'
import '../css/loginPage.css'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { loginHandler } from '../../function/auth'
import { useDispatch } from 'react-redux';
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
      username: '',
      password: ''
  });

  const { username, password } = formData;
  const onChange = (e) =>{
    setFormData({ ...formData,[e.target.name]:e.target.value });
  }

  const onSubmit = (e) =>{
    e.preventDefault();

    const user = {
      username,
      password
    }
    loginHandler(user).then(res =>{
      dispatch({
        type:'LOG_IN_USER',
        payload:{
          token:res.data.token,
          username:res.data.payload.user.username,
          role:res.data.payload.user.role
        }
      });
      localStorage.setItem('token',res.data.token);
      localStorage.setItem('items', JSON.stringify(
        { 
          id: res.data.payload.user.id,
          name: res.data.payload.user.name,
          surname: res.data.payload.user.surname,
          role: res.data.payload.user.role,
          image: res.data.payload.user.image
        }
      ));
      toast.success(res.data);
      roleBasedRedirect(res.data.payload.user.role);
    }).catch(err => {
      toast.error(err.response.data.msg)
    })
  }

  const roleBasedRedirect = (res) => {
    if(res === 'admin'){
      navigate("/application/register/");
      window.location.reload(); 
    }else{
      navigate("/application/");
      window.location.reload(); 
    }
  }
  return (
    // <div className="loginPage-main">
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={ e => onSubmit(e) }>
              <h3>Sign In</h3>
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter username"
                  autoFocus
                  onChange={ e => onChange(e) }
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={ e => onChange(e) }
                />
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid" align="right">
                <button type="submit" className="btn btn-primary">
                  Sign-in
                </button>
              </div>
              {/* <p className="forgot-password text-right">
                Already registered <a href="##">sign in?</a>
              </p> */}
            </form>
          </div>
        </div>
    </div>
    // </div>
  )
}

export default LoginPage
