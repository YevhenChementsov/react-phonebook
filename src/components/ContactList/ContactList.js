import { ContactListItem } from 'components';
import PropTypes from 'prop-types';
import { Item } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <ContactListItem
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      </Item>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
