import { ReactComponent as DeleteIcon } from 'icons/bin.svg';
import { type Contact } from '../ContactsList';

import { ContactListButton, Name, PhoneNumber } from './Contact.styled';

// interface ContactListItemProps {
//   name: string;
//   number: string;
//   onDeleteContact: () => void;
// }

type ContactProps = Pick<Contact, 'name' | 'number'> & {
  onDeleteContact: () => void;
};

export function Contact({ name, number, onDeleteContact }: ContactProps) {
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
