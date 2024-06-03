
import './App.css';
import {
  BrowserRouter,Routes,Route
} 
from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './contexts/NoteState';

function App() {
  return (
    <div className="App">

      <>
      <NoteState>
        <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route  path="/" element={<Home />}> </Route>
              
           
            <Route  path="/about" element={ <About />}></Route>
           
             
            

          </Routes>
          </div>
        </BrowserRouter>
        </NoteState>
      </>
    </div>
  );
}

export default App;
