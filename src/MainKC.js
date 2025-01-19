import React , { useState } from 'react'
import LoginKC from './login/LoginKC'
import HomeKC from './homeKC/HomeKC'
import { onAuthStateChanged } from 'firebase/auth'
import { authKC } from './firebase'

export default function MainKC() {

    const [userKC, setUserKinder] = useState(null);

    onAuthStateChanged(authKC, (isLoginUserKC)=>{
        if (isLoginUserKC) {
          setUserKinder(isLoginUserKC)
        } else {
          setUserKinder(null)
        }
      });

  return (
    <div>
        {
            userKC ? <HomeKC userLoginKC = {userKC.email}/> : <LoginKC/>
        }
    </div>
  )
}
