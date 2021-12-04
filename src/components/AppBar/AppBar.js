import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './AppBar.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className="appbar">
      <NavLink className="link" to="/">
        Домашняя страница
      </NavLink>
      {isLoggedIn && (
        <NavLink className="link" to="/contacts">
          Контакты
        </NavLink>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
