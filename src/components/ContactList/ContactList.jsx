import { ContactListStyle, ContactItemStyle } from './ContactList.styled';
import { ButtonStyle } from 'components/App.styled';
import { getFilter } from 'store/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneBookValue } from 'store/phoneBookSlice';
import { delContactThunk, getContactsThunk } from 'services/fetchContacts';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const phoneBook = useSelector(getPhoneBookValue);
  const filterPhoneBook = useSelector(getFilter);

  const lowerFilter = filterPhoneBook.toLowerCase();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
  };

  return (
    <ContactListStyle>
      {visibleContacts.map(({ name, phone, id }) => (
        <ContactItemStyle key={id}>
          <p>
            {name}: {phone}
          </p>
          <ButtonStyle type="button" onClick={() => deleteContact(id)}>
            Delete
          </ButtonStyle>
        </ContactItemStyle>
      ))}
    </ContactListStyle>
  );
};
