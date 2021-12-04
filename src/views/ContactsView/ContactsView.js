import ContacsForm from '../../components/ContacsForm/ContacsForm';
import ContasctsList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

export default function ContactsView() {
  return (
    <div>
      <ContacsForm />
      <h2>Контакты</h2>
      <Filter />
      <ContasctsList />
    </div>
  );
}
