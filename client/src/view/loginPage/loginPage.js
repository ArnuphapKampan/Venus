import React from 'react'
import '../css/loginPage.css'
import { Link } from 'react-router-dom'
function loginPage() {
  return (
    // <div className="loginPage-main">
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
              <h3>Sign In</h3>
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
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
              <div className="d-grid">
                <Link to="/application">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                </Link>
              </div>
              <p className="forgot-password text-right">
                Already registered <a href="##">sign in?</a>
              </p>
            </form>
          </div>
        </div>
    </div>
    // </div>
  )
}

export default loginPage