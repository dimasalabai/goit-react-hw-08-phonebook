import { nanoid } from 'nanoid';
import { useMemo, useState, memo, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { addContact } from '../../../redux/contacts/contacts-operations';

import styles from './phone-book-form.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

const PhoneBookForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  // ============================================

  const dispatch = useDispatch();

  const onAddСontact = data => {
    // data - state форми

    dispatch(addContact(data));

    resetForm();
  };
  // ============================================

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const resetForm = () => {
    setState({ ...INITIAL_STATE });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddСontact({ ...state });
  };

  const contactsName = useMemo(() => nanoid(), []);
  const contactsPhone = useMemo(() => nanoid(), []);

  const { name, phone } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor={contactsName}>Name</label>
        <input
          value={name}
          onChange={handleChange}
          id={contactsName}
          type="text"
          name="name"
          required
          placeholder="Name"
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={contactsPhone}>Number</label>
        <input
          value={phone}
          onChange={handleChange}
          id={contactsPhone}
          type="tel"
          name="phone"
          required
          placeholder="Phone"
          className={styles.formInput}
        />
      </div>
      <button type="submit" className={styles.btn}>
        Add Contact
      </button>
    </form>
  );
};

export default memo(PhoneBookForm);
