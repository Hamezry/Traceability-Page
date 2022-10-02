import React, {useState} from 'react'
import './index.css';
import Navbar from './components/Navbar';
import Information from './components/Information';
import Sidemap from './components/Sidemap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [long, setLong] = useState(0)
  const [lat, setLat] = useState(0)
  const [farmlat, setFarmlat] = useState(0)
  const [farmlong, setFarmlong] = useState(0)
  
  return (
    <BrowserRouter>

      <Routes>
        
          <Route path='/' element={
            <div>
              <Navbar />
              <div className="lg:flex lg:justify-between w-full  lg:h-[calc(100vh-90px)] lg:overflow-y-hidden bg-[#f8f7f7]">
                <Sidemap lat={lat} long={long} farmlat={farmlat} farmlong={farmlong}/>
                <Information setLat={setLat}  setLong={setLong} setFarmlong={setFarmlong} setFarmlat={setFarmlat} />
              </div>

            </div>
              
          } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
