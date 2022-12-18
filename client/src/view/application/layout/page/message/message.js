import React, { useEffect } from 'react'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';

const Message = () => {

    //active menu
    const dispatch = useDispatch();
    const activePath = "message";
    useEffect(() => {
        dispatch(activeMenu(activePath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu

      
  return (
    <>
    </>
  )
}

export default Message