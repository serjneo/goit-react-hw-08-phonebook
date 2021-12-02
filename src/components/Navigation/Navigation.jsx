import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav>
    <NavLink to='/' className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }>Home</NavLink>
    <NavLink to='/register' className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }>Registration</NavLink>
    <NavLink to='/login' className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }>Login</NavLink>
    <NavLink to='/contacts' className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }>Contacts</NavLink>
  </nav>
);

export default Navigation;