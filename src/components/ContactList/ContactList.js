import ContasctsListItem from '../ContactsListItem/ContactsListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import './ContactList.scss';

function ContasctsList() {
  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.entities, state.filter),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className="list">
      {contacts.map(contact => {
        return (
          <li className="item" key={contact.id}>
            <ContasctsListItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContasctsList;
