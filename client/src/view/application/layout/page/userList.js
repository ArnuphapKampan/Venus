import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
//active menu
import { activeMenu } from '../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
const UserList = () => {
    
    //active menu
    const dispatch = useDispatch();
    const activePath = "user";
    useEffect(() => {
        dispatch(activeMenu(activePath));
    },[dispatch])
    //active menu
    
  return (
    <main>
        <div className="container-fluid">
            <div className="container">
            <h1 className="mt-4">UserList</h1>
            <div className="col-md-6 offset-md-3">
                <NavLink className="nav-link" to="register/" >
                    <button type="button" className="btn btn-success" name="btn-register" >Create User</button>
                </NavLink>
            </div>
            </div>
        </div>
    </main>
  )
}

export default UserList