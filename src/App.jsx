//import Header from './Header.jsx' 
import Login from './Login.jsx' 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import OpeningPage from './OpeningPage.jsx'

//import Footer from './Footer.jsx   <Footer></Footer> 

function App() {
  return(
  <>
   
   <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />  {/* Home or opening page */}
        <Route path="/Login" element={<Login />} />  {/* The "header" page */}
      </Routes>
    </Router>
  </>
  );
}

export default App
