
import React from 'react'
import Button from 'react-bootstrap/Button';
import { TextLoginStatic } from '../Resource/Resource.js'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { authKC } from '../firebase';
import { IncorrectUser } from '../alertSwal/AlertSwal.js';
import '../login/LoginKC.css'

const LoginBtn = (props) => {

    const login = async () =>{
        try{
            await signInWithEmailAndPassword(authKC, props.user, props.pass)
        }catch (error) {
            IncorrectUser()
        }
    }
    return (
        <div>
        <Button 
        variant="primary" 
        className='btnLogin'
        onClick={login} 
        >
        {TextLoginStatic.btnTitulo}
      </Button>
    </div>
    )
}
export default LoginBtn