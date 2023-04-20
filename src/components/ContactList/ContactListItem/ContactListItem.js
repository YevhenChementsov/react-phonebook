import { ReactComponent as DeleteIcon } from 'icons/bin.svg';
import PropTypes from 'prop-types';
import { ContactListButton, Name, PhoneNumber } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <Name>{name}</Name>
      <PhoneNumber>{number}</PhoneNumber>
      <ContactListButton onClick={onDeleteContact}>
        <DeleteIcon width="16" height="16" />
      </ContactListButton>
    </>
  );
};

ContactListItem.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
