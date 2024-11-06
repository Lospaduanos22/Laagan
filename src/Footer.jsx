import './assets/styles/footer.css';
import logo from './assets/images/logomain.png'; // Adjust path based on where your image is located

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        
        <div className="footer-grid">
          
{/* LOGO */}
<div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
          </div>

            {/* Column 1 */}
          <div>
            <h2 className="text-xl font-semibold text-black">Company</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Press</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-xl font-semibold text-black">Destinations</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="footer-link">Maldives</a></li>
              <li><a href="#" className="footer-link">Los Angeles</a></li>
              <li><a href="#" className="footer-link">Las Vegas</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-xl font-semibold text-black">Join Our Newsletter</h2>
            <ul className="mt-4 space-y-2">
              <input type='text' className="letterinput" placeholder='Your email address' aria-label=""/>
              <button type='button' className='subscribe'>Subscribe</button>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
