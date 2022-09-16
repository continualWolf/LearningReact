import logo from './logo.svg';
import './Nav.css';
import './Site.css';

 function changeColor () {
  console.log('Register was clicked');
 }

function navBar() {
  const logoContainer = {
    position : "absolute",
    left : 0
  };
  
    return (
      <div className='navbar-container'>
            <ul className='navbar-items'>
                <li style={logoContainer}>
                    <img src={logo} className="nav-logo" alt="logo"/>
                </li>
                <li>
                    <a href="index.html">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="index.html">
                        INFO
                    </a>
                </li>
                <li>
                    <a href="index.html"> 
                        FAQ
                    </a>
                </li>
                <li>
                    <a href="index.html">
                        NEWS
                    </a>
                </li>
                <li>
                    <a href="find_us.html">
                        FIND US
                    </a>
                </li>
                <li>
                    <a className="register-button" href="index.html" id="reg" onClick={changeColor}>
                        Register
                    </a>
                </li>
            </ul>
        </div>
    );
  }
  
  
  export default navBar;
  