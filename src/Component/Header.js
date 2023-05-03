import React,{useState} from 'react'
import Navbar from './Navbar'
import Login from '../Component/Login'

function Header() {
  const [LoginShow,setLoginshow] = useState(false)

  
  return (
    <>
  <Navbar setLoginshow={setLoginshow} LoginShow={LoginShow}/>
  {LoginShow && <Login setLocationShow={setLoginshow} />}

    </>
  )
}

export default Header