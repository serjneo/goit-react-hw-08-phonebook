import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import './LoginView.scss';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label
        style={{ marginRight: '20px', fontSize: '20px' }}
        className="label"
      >
        Почта:
        <input
          className="input"
          name="email"
          onChange={handleInputChange}
          value={email}
          type="text"
          required
        />
      </label>
      <label
        className="label"
        style={{ marginRight: '20px', fontSize: '20px' }}
      >
        Пароль:
        <input
          className="input"
          name="password"
          onChange={handleInputChange}
          value={password}
          required
        />
      </label>
      <button className="btn" type="submit">
        Войти
      </button>
    </form>
  );
}
