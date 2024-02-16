import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from '../../../redux/contacts/contacts-selectors';

import {
  fetchContacts,
  deleteContact,
} from '../../../redux/contacts/contacts-operations';

import styles from './contacts.module.css';

const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteСontact = id => {
    dispatch(deleteContact(id));
  };

  const contactsItems = items.map(({ id, name, phone }) => {
    return (
      <li key={id}>
        {name}: {phone}
        <button onClick={() => onDeleteСontact(id)} type="button">
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className={styles.wrapper}>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {Boolean(items.length) && <ul>{contactsItems}</ul>}
    </div>
  );
};

export default Contacts;
