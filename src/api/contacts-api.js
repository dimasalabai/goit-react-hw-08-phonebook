import instance from './auth-api';

export const requestFetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await instance.post('/contacts', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
