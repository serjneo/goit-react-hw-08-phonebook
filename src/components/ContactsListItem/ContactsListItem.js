import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import './ContactsListItem.scss';

function ContasctsListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span className="name"> {name}</span>
      <span className="number"> {number}</span>
      <button
        className="button"
        name={name}
        onClick={() => dispatch(deleteContact(id))}
      >
        удалить
      </button>
    </div>
  );
}

ContasctsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContasctsListItem;
