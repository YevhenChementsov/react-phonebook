import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import { ContactAddForm } from 'components/AddContactForm/AddContactForm';
import { Clock } from 'components/Clock/Clock';
import {
  type Contact,
  ContactsList,
} from 'components/ContactsList/ContactsList';
import { IconsWrapper } from 'components/IconsWrapper/IconsWrapper';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';

import Open from 'icons/add.svg?react';
import Close from 'icons/return.svg?react';

import {
  ButtonIcon,
  Container,
  Footer,
  Header,
  Main,
  Title,
  Wrapper,
} from './App.styled';

interface AppState {
  contacts: Contact[];
  filter: string;
  visible: boolean;
}

type showNotificationType = 'info' | 'success' | 'warn' | 'error';

export default class App extends Component<Record<string, never>, AppState> {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    visible: false,
  };

  componentDidMount() {
    const storageContactList = JSON.parse(
      localStorage.getItem('contactList') || '[]',
    );

    if (storageContactList.length > 0) {
      this.setState({ contacts: storageContactList });
    }
  }

  componentDidUpdate(_: never, prevState: AppState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      localStorage.setItem('contactList', JSON.stringify(newContacts));
    }

    if (newContacts.length > prevContacts.length && prevContacts.length !== 0) {
      this.toggle();

      if (newContacts.length >= 9) {
        const message = 'Your memory is full. Please, delete some contacts!';
        const typeOfMessage = 'error';

        this.showNotification(typeOfMessage, message);
      }
    }
  }

  addContact = ({ name, number }: Omit<Contact, 'id'>) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      const message = `${contact.name} is already in contacts.`;
      const typeOfMessage = 'warn';

      if (contacts.some(contact => contact.name.includes(name))) {
        this.showNotification(typeOfMessage, message);
        return null;
      }

      return { contacts: [contact, ...contacts] };
    });
  };

  changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (id: string) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter),
    );
  };

  showNotification = (type: showNotificationType, message: string) =>
    toast[type](message, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  sortContacts = () => {
    const { contacts } = this.state;

    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    this.setState({ contacts: sortedContacts });
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { filter, visible, contacts } = this.state;
    const { addContact, changeFilter, deleteContact, sortContacts, toggle } =
      this;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1 hidden>Phonebook App</h1>
        <Header>
          <Wrapper>
            <Clock />
            <IconsWrapper />
          </Wrapper>
          <Title>Contacts</Title>
          {!visible && (
            <SearchFilter
              value={filter}
              onChangeFilter={changeFilter}
              onSortContacts={sortContacts}
            />
          )}
        </Header>
        <Main>
          {visible ? (
            <ContactAddForm onSubmit={addContact} />
          ) : (
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={deleteContact}
            />
          )}
        </Main>
        <Footer>
          <ButtonIcon onClick={toggle} disabled={contacts.length === 9}>
            {visible ? (
              <Close width="24" height="24" />
            ) : (
              <Open width="24" height="24" />
            )}
          </ButtonIcon>
        </Footer>
        <ToastContainer />
      </Container>
    );
  }
}
