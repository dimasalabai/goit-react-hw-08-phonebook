export const selectAllContacts = store => store.contacts.items;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  const { items, isLoading, error } = contacts;

  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name, phone }) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = phone.toLowerCase();

    return (
      normalizedName.includes(normalizedFilter) ||
      normalizedPhone.includes(normalizedFilter)
    );
  });

  return {
    items: filteredContacts,
    isLoading,
    error,
  };
};
