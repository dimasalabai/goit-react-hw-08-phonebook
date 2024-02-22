import PhoneBookForm from '../../components/PhoneBook/PhoneBookForm/PhoneBookForm';
import Filter from '../../components/PhoneBook/Contacts/Filter/Filter';
import Contacts from '../../components/PhoneBook/Contacts/Contacts';

import styles from './phone-book-page.module.css';

const PhoneBookPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Phonebook</h2>
      <PhoneBookForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};

export default PhoneBookPage;
