import React,{useContext} from 'react'
import { UserDataContext } from '../Context/userContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({
    children
}) => {
    
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    console.log(token);

    if(!token){
        navigate('/login');
    }
    
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper