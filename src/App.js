import './index.css';
import Navbar from './components/Navbar';
import Information from './components/Information';
import Sidemap from './components/Sidemap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        
          <Route path='/' element={
            <div>
              <Navbar />
              <div className="lg:flex lg:justify-between w-full  lg:h-[calc(100vh-90px)] lg:overflow-y-hidden bg-[#f8f7f7]">
                <Sidemap />
                <Information />
              </div>

            </div>
              
          } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
