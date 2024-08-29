import { Link } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav id='Navigation'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;