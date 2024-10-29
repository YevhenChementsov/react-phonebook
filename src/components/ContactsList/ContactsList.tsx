import { ContactItem } from './ContactItem/ContactItem';
import { Item } from './ContactsList.styled';

export interface Contact {
  id: string;
  name: string;
  number: string;
}

type ContactsListProps = {
  contacts: Contact[];
  onDeleteContact: (id: string) => void;
};

export function ContactsList({
  contacts,
  onDeleteContact,
}: ContactsListProps): JSX.Element {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </Item>
      ))}
    </ul>
  );
}
