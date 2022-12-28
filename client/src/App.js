import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './view/loginPage/loginPage'
import HomePage from './view/homePage/home/home'
import Application from './view/application/application'
import Content from './view/application/layout/page/content/content'
import Register from './view/application/layout/page/user/register'
import UserList from './view/application/layout/page/user/userList'
import EditUser from './view/application/layout/page/user/editUser'
import Profile from './view/application/layout/page/profile/profile'
import Message from './view/application/layout/page/message/message'
import Map from './view/application/layout/page/map/map'
import Location from './view/application/layout/page/mapManage/location'
import EditLocation from './view/application/layout/page/mapManage/editLocation'
import LocationList from './view/application/layout/page/mapManage/locationList'

//Notify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Redux
import { useDispatch } from 'react-redux';
import { login } from './reducer/userReducer';
//import function
import { currentUser } from './function/auth';
//protected route
import UserRoute from './routes/userRoute'

function App() {
  const dispatch = useDispatch();

  //active first
  useEffect(() => {
    //get token from localStorage
    const idTokenResult = localStorage.token;
    if(idTokenResult){
      currentUser(idTokenResult).then( res => {
        //get value into store redux
        const payload = { 
          id: res.data[0].id,
          username: res.data[0].username,
          role: res.data[0].role,
          image: res.data[0].image
        }
        dispatch(login(payload))
      }).catch( err => {
        console.log(err.response.data.msg)
      });
    }
  },[dispatch]);
  return (
          <>
            <ToastContainer theme="colored"/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<LoginPage />} />
              <Route element={<UserRoute />}>
                <Route path="application/" element={<Application/>}>
                  <Route  path="" element={<Content />} />
                  <Route  path="user/" element={<UserList />} /> 
                  <Route  path="user/register/" element={<Register />} />  
                  <Route  path="user/editUser/:userID" element={<EditUser />} />  
                  <Route  path="profile/:userID" element={<Profile />} />  
                  <Route  path="message/" element={<Message />} />  
                  <Route  path="map/" element={<Map />} />  
                  <Route  path="mapManage/" element={<LocationList />} />
                  <Route  path="mapManage/location/" element={<Location />} /> 
                  <Route  path="mapManage/editLocation/:locationID" element={<EditLocation />} /> 
                </Route>
              </Route>
            </Routes>
           </>
  )
}
export default App