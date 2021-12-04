import { authSelectors } from '../../redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './UserMenu.scss';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleBtn = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div style={styles.container}>
      <h4 style={styles.name}> {`Привет ${name}`} </h4>
      <button className="btn" onClick={handleBtn} type="button">
        Выйти
      </button>
    </div>
  );
}
