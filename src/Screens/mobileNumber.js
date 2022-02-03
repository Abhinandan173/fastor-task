import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const MobileNumber = (props) => {
    
  const [value, setValue] = useState(null)
  const [enableBtn, setEnableBtn] = useState(true)
  const [errorMsg , setErrorMsg] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
     if(value?.length === 10){
         setEnableBtn(false) 
     }else{
        setEnableBtn(true)
     }
  },[value])

  const getOTP = async ()  => {
      let body = {
        phone:value,
        dial_code:'+91'
      }
    axios.post('https://staging.fastor.in/v1/pwa/user/register', body)
    .then(response => {
        if(response.status == 200){
            console.log('response', response)
            setErrorMsg(false)
            props.passMobileNum(value)
            navigate('/OtpScreen')
        }else{
            console.log('somthing went wrong');
        }
    })
    .catch(error => {
        setErrorMsg(true)
        console.log('error', error)
    });
  }

   return(
       <div className='container'>
           <div style={{width:'80%', marginLeft:'20%'}}>
           <h1 className='header'>LogIn with mobile number</h1>
           <div className='login-feilds'>
            <select>
                <option>In +91</option>
                <option>Nz +92</option>
                <option>Aus +93</option>
            </select>
            <input 
                placeholder='Enter Your Number'
                type={'number'}
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                className='login-input-feild'
            />
           </div>
            { errorMsg && <p style={{color:'red'}}>{'Somthing Went Wrong Try After Some Time'}</p>}
            <button
                style={enableBtn?{cursor:'no-drop', backgroundColor:''}:{cursor:'pointer', backgroundColor:'lightgreen'}}
                disabled={enableBtn} onClick={getOTP} className='get-otp-btn'
            >
                Get OTP
            </button>
           </div>
       </div>
   )
}

export default MobileNumber;