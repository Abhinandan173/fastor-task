import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OtpScreen = (props) => {

    const [errorMsg , setErrorMsg] = useState(false)
    const navigate = useNavigate()

    console.log('screen 2 ' , props);

    const OtpSuccess = async ()  => {
        let body = {
          phone:props?.mobileNum,
          otp:'123456',
          dial_code:'+91'
        }
      axios.post('https://staging.fastor.in/v1/pwa/user/login', body)
      .then(response => {
          console.log('response', response.data.data.token)
          setErrorMsg(false)
        navigate('/RestorentScreen')
        localStorage.setItem('token', response.data.data.token);
      })
      .catch(error => {
          setErrorMsg(true)
          console.log('error', error)
      });
    }

    return(
        <div className='container'>
        <div style={{width:'80%', marginLeft:'20%'}}>
            <h1 className='header'>Enter Your OTP</h1>
            <div className='login-feilds'>
            <input 
                type={'number'}
                value={'123456'}
                className='otp-input-feild'
                // onChange={(e)=>setValue(e.target.value)}
            />
           </div>
            { errorMsg && <p style={{color:'red'}}>{'Not Able To Send Otp'}</p>}
           <button style={{cursor:'pointer'}}  onClick={OtpSuccess} className='get-otp-btn'>Submit</button>
        </div>
        </div>
    )
}

export default OtpScreen;