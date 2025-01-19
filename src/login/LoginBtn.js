
import React from 'react'
import Button from 'react-bootstrap/Button';
import { TextLoginStatic } from '../Resource/Resource.js'
import {signInWithEmailAndPassword} from 'firebase/auth'
import Swal from 'sweetalert2';
import { authKC } from '../firebase';

const LoginBtn = (props) => {

    const login = async () =>{
        try{
            await signInWithEmailAndPassword(authKC, props.user, props.pass)
        }catch (error) {
            Swal.fire({
                title: "Error de usuario",
                text: "Revise usuario y contraseña",
                icon: "question"
              });
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