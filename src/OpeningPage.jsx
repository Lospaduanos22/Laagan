import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './assets/styles/opening.css';
import logo from './assets/images/logomain.png';
import bgImage from './assets/images/OpeningPage_bg.png';  // Import the background image

const OpeningPage = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  // Function to handle button click and navigate to the "header" page
  const handleButtonClick = () => {
    navigate('/Login');  // This will redirect to the /header route
  };

  return (
    <div 
      className="background-container" 
      style={{ backgroundImage: `url(${bgImage})` }}  // Apply the imported image as background
    >
      <div className='logo'>        
        <img src={logo} alt="Logo of the page" className="logo" />
      </div>
      <div className="overlay-content">
        <h1>LET&apos;S PLAN YOUR</h1>
        <p>LAAG!</p>
        {/* Button to trigger navigation */}
        <button className="action-button" onClick={handleButtonClick}>
          Log in Or Sign Up
        </button>
      </div>
    </div>
  );
};

export default OpeningPage;
