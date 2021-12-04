import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './RegisterView.scss';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    console.log({ name, email, password });
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="label" style={{ marginRight: '20px' }}>
        Имя:
        <input
          className="input"
          placeholder="Иван"
          name="name"
          onChange={handleInputChange}
          value={name}
          type="text"
          required
        />
      </label>
      <label className="label" style={{ marginRight: '20px' }}>
        Почта:
        <input
          className="input"
          placeholder="example@gmail.com"
          name="email"
          onChange={handleInputChange}
          value={email}
          type="mail"
          required
        />
      </label>
      <label className="label">
        Пароль:
        <input
          className="input"
          placeholder="не меньше 8 символов"
          name="password"
          onChange={handleInputChange}
          value={password}
          type="text"
          required
        />
      </label>
      <button className="btn" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}
