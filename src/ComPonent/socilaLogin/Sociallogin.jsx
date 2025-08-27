import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
const Sociallogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()


    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
           // console.log(loggedInUser)
           const userInfo = {
            email: loggedInUser.email,
            name: loggedInUser.displayName,
           }
           axiosPublic.post('/users', userInfo)
           .then(data =>{
            console.log(data.data)
            navigate('/')
           })
        })
        .catch(error =>{
            console.log('error', error.message)
        })
    }
    return (
        <div className='p-8'>
            <div className='divider '></div>
            <div>
                <button onClick={handleGoogleSignIn} className='btn hover:bg-amber-600'>
                    <FaGoogle className='mr-2 text-2xl '></FaGoogle> Google
                </button>
            </div>
        </div>
    );
};

export default Sociallogin;