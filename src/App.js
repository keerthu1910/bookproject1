import './App.css';
import Header from './components/Header';
import Bookcontainer from './components/Bookcontainer';
import {Routes,Route} from 'react-router-dom'
import Bookstobedisplayed from './components/Bookstobedisplayed';
import Addbooks from './components/Addbooks';
import Homepage from './components/Homepage';

function App() {
  return (
        
      <div>
          <Header />
          {/* <Homepage /> */}
          <Bookcontainer  />
          <Routes>
            <Route path='/bookstobedisplayed' element={<Bookstobedisplayed/>}/>
            
            <Route path='/addbooks' element={<Addbooks />}/>
            <Route path='/' element={<Homepage />}/>
          </Routes>
      </div>
  );
}

export default App;
