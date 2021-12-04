import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <h2>
      {isLoggedIn
        ? 'Теперь, ты можешь пользоваться контактами'
        : 'Привет, это домашняя страница, чтобы использовать контакты, ты должен авторизироваться)'}
    </h2>
  );
}
