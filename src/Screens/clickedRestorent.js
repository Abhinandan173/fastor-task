import React from 'react'
import { useLocation } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const ClickedRestorent = () => {
    
  const location = useLocation();

    return(
        <div className='clickedResContainer'>
            <img 
                src={location.state.imgSrc} 
                style={{
                    height:'80%',
                    width:'auto',
                    borderRadius:'3%'
                }}
            />
            <img 
                src='/fastorlogo.png'
                style={{
                    position:'absolute',
                    height:'40%',
                    width:'20%',
                    borderRadius:'50%'
                }}
            />

            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}} className='share-btn'  >
                <a   target="_blank" href="https://facebook.com">
                <FaFacebookSquare size={25} color='blue'/>
                </a>
                <a  target="_blank" href="https://api.whatsapp.com/">
                <FaWhatsapp size={25} color='green'/>
                </a>
                <a  target="_blank" href="https://www.linkedin.com/">
                <FaLinkedin size={25} color='blue'/>
                </a>
                <a  target="_blank" href="https://twitter.com/">
                <FaTwitter size={25} color='blue'/>
                </a>
            </div>
            
        </div>
    )
}

export default ClickedRestorent;