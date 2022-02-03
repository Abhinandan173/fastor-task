import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaRupeeSign } from 'react-icons/fa';
import { FaBackward } from 'react-icons/fa';
const RestorentScreen = () => {

    const [restorentData, setRestorentData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getRestorents()
    },[])

    const getRestorents= async ()  => {
      let getToken =  localStorage.getItem('token');
      axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118',{
          headers:{Authorization:getToken}
      })
      .then(response => {
        if(response.status == 200){
            console.log('response restorent', response)
            setRestorentData(response.data)
        }else{
            console.log('somthing went wrong');
        }
      })
      .catch(error => {
          console.log('error', error)
      });
    }

    const restorentClick = (item) => {
        console.log('item---',item);
        navigate('/ClickedRestorent',{state:{imgSrc:item.images[0].url}})
    }

    

    return(
        <div className="container-restorent">
            <div className="sub-container-restorent">

            <div className="restorent-header" >
                <FaBackward style={{margin:'0 5%', cursor:'pointer'}} size={27}
                  onClick={()=>navigate('/OtpScreen')}
                />
                <h1 className="restorents-foryou">Restorents For You</h1>
            </div>

            {restorentData.length > 0 ?
            <>
            {restorentData.map((item,index)=>{
                return(
                    <div onClick={()=>restorentClick(item)} className="restorent-card">
                        <div className="card-img-container">
                            <img className="card-img" src={item.images[0].url}/>
                        </div>
                        <div className="card-details">
                              <div className="restorent-name">{item.restaurant_name}</div>
                              <div className="restorent-items">
                                  {item?.cuisines?.length > 0 ? item.cuisines.map((cuisin)=>(
                                  <span>{cuisin?.cuisine_name ?? 'No cuisines'}</span>
                                  )):'No Cuisines'}
                              </div>
                              <div className="restorent-items">
                                  {item?.location?.city_name?item.location.city_name : 'No city' },{item?.location?.state_name?item.location.state_name:'No state'}
                                  </div>
                              <div className="restorent-offer">4 Offerse trending</div>
                              <div className="rating-price">
                                  <div> 
                                      <div className="restorent-star">
                                          <FaStar style={{marginRight:5}}/>{' '}{item.rating.restaurant_avg_rating}
                                      </div>
                                      <div>{item?.rating?.restaurant_avg_rating >= 4 ? 'Popularity' : 'Avarage'}</div>
                                  </div>
                                  <div className="restorent-cost">  
                                      <div className="restorent-star">
                                          <FaRupeeSign style={{marginRight:5}}/>{' '}{item.avg_cost_for_two}
                                      </div>
                                      <div>Cost for two</div>
                                 </div>
                              </div>
                        </div>
                    </div>
                )
            })}
            </> 
            : <h2>As Of Now all restorents are closed..!</h2> 
            }
           </div>
        </div>
    )
}

export default RestorentScreen;