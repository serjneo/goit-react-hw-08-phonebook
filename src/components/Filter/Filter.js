import { useSelector, useDispatch } from 'react-redux';
import { handleFilter } from '../../redux/actions';
import './Filter.scss';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = e => {
    dispatch(handleFilter(e.currentTarget.value));
  };

  return (
    <label className="label">
      Поиск контакта
      <input
        className="input"
        name="filterValue"
        onChange={handleFilterChange}
        value={filter}
      />
    </label>
  );
}

export default Filter;
