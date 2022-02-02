
import MobileNumber from './Screens/mobileNumber';
import OtpScreen from './Screens/otpScreen';
import RestorentScreen from './Screens/restorents';
import ClickedRestorent from './Screens/clickedRestorent';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
function App() {

  const [mobileNum, setMobileNum] = useState(null)

  // Lifting state up is done for get the number in screen 2
  const passMobileNum = (num) => { 
    setMobileNum(num)
  }

  return (
    
      <Routes>
        <Route path="/" element={<MobileNumber passMobileNum={passMobileNum}/>}/>
        <Route path="OtpScreen" element={<OtpScreen mobileNum={mobileNum}/>}/>
        <Route path="RestorentScreen" element={<RestorentScreen />} />
        <Route path="ClickedRestorent" element={<ClickedRestorent />} />
      </Routes>
  );
}

export default App;
