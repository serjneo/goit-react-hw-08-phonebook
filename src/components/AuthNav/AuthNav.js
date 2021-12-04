import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink style={{ marginRight: '20px' }} className="link" to="/register">
        Регистрация
      </NavLink>
      <NavLink className="link" to="/login">
        Логин
      </NavLink>
    </div>
  );
}
