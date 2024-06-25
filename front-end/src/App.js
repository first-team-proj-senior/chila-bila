import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import RealEstate from './components/pages/RealEstate'
import Cars from './components/pages/Cars'
import Electronics from './components/pages/Electronics'
import Hobbies from './components/pages/Hobbies'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import AddAnnoucement from './components/pages/AddAnnoucement.jsx';
import Home from './components/pages/Home' 
import Footer from './components/Footer.jsx' 
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-annoucement" element={<AddAnnoucement/>} />
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path='/category/real-estate' element={<RealEstate/>}/>
          <Route path='/category/cars' element={<Cars/>}/>
          <Route path='/category/electronics' element={<Electronics/>}/>
          <Route path='/category/hobbies' element={<Hobbies/>}/>
        </Routes>
       <Footer/> 
      </Router>
    </div>
  );
}

export default App;
