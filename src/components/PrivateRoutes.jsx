import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const accessToken=sessionStorage.getItem('userToken');
  let validUser
  if(accessToken && accessToken!= 'undefined')
    validUser = true
  else
    validUser = false

return (
  validUser ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes
