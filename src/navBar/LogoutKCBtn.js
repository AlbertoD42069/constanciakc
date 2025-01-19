import React from 'react'
import Button from 'react-bootstrap/Button';
import { signOut } from 'firebase/auth';
import { authKC } from '../firebase';

const LogoutBtn = () => {
  
    const logout = async () => {
      await signOut(authKC);
    }
  return (
    <Button className='btnExit' variant="danger" onClick={logout}>Salir</Button>
  )
}
export default LogoutBtn