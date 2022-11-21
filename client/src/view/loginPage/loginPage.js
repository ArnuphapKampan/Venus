import React, { useState } from 'react'
import '../css/loginPage.css'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { loginHandler } from '../../function/auth'
function LoginPage() {
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
      toast.success(res.data);
      navigate("/application/");
    }).catch(err => {
      toast.error(err.response.data.msg)
    })
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
