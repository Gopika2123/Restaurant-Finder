import './App.css';
import  Header from './Component/Header';
import Footer from './Component/Footer';
import Restlist from './Component/Restlist';
import Viewrest from './Component/Viewrest';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <>
          <header className="App-header">
           <Header/>
            </header>
            <Routes>
              <Route path='/'element={  <Restlist/>}/>
              <Route path='/Viewrest/:id'element={<Viewrest/>}/>
              </Routes>
          
           <Footer/>
      </>
    </div>
  );
}

export default App;
