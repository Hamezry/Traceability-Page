import './App.css';
import Navbar from './components/Navbar';
import Information from './components/Information';
import Sidemap from './components/Sidemap';

function App() {
  return (
    <div className='w-full'>
      <Navbar/>
      <div class="lg:flex lg:justify-between w-full  lg:h-[calc(100vh-90px)] lg:overflow-y-hidden bg-[#E5E5E5]">
       <Sidemap/>
       <Information />
     

      </div>
  
      
    </div>
  );
}

export default App;
