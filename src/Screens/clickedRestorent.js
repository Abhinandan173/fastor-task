import React from 'react'
import { useLocation } from 'react-router-dom';
import {ShareSocial} from 'react-share-social' 

const ClickedRestorent = () => {
    
  const location = useLocation();

    return(
        <div className='clickedResContainer'>
            <img 
                src={location.state.imgSrc} 
                style={{
                    height:'70%',
                    width:'60%',
                    borderRadius:'3%',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                }}
            />
            <img 
                src='/fastorlogo.png'
                style={{
                    position:'absolute',
                    height:'40%',
                    width:'20%',
                    top:'18%',
                    borderRadius:'50%'
                }}
            />

            <div style={{display:'flex', flexDirection:'row', justifyContent:'center',}} className='share-btn'  >
            <ShareSocial
                style={{
                    width:'50%',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    borderRadius: 3,
                    border: 0,
                    color: 'white',
                    padding: '10px 30px',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                }}
                    url ={'https://fastor.ai/'}
                    socialTypes={['facebook','twitter','linkedin']}
                />
            </div>
            
        </div>
    )
}

export default ClickedRestorent;