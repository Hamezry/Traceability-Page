import './App.css';
import Navbar from './components/Navbar';
import Information from './components/Information';
import Sidemap from './components/Sidemap';

function App() {
  return (
    <div>
      <Navbar/>
      <div class="lg:flex lg:h-{100vh] pt-16 bg-[#E5E5E5]">
       <Sidemap/>
       <Information />
       
       
     

      </div>
  
      
    </div>
  );
}

export default App;
