import DeleteIcon from 'icons/bin.svg?react';
import { type Contact } from '../ContactsList';

import { ContactListButton, Name, PhoneNumber } from './ContactItem.styled';

// interface ContactListItemProps {
//   name: string;
//   number: string;
//   onDeleteContact: () => void;
// }

type ContactItemProps = Pick<Contact, 'name' | 'number'> & {
  onDeleteContact: () => void;
};

export function ContactItem({
  name,
  number,
  onDeleteContact,
}: ContactItemProps) {
  return (
    <>
      <Name>{name}</Name>
      <PhoneNumber>{number}</PhoneNumber>
      <ContactListButton onClick={onDeleteContact}>
        <DeleteIcon width="16" height="16" />
      </ContactListButton>
    </>
  );
}
