import { Component } from 'react';

import {
  ContactAddForm,
  ContactList,
  IconsWrapper,
  SearchFilter,
  Time,
} from 'components';
import { ReactComponent as Close } from 'icons/reply.svg';
import { ReactComponent as Open } from 'icons/user-plus.svg';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import {
  ButtonIcon,
  Container,
  Footer,
  Header,
  Main,
  Title,
  Wrapper,
} from './App.styled';
export default class App extends Component {
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
    const storageContactList = JSON.parse(localStorage.getItem('contactList'));

    if (storageContactList) {
      this.setState({ contacts: storageContactList });
    }
  }

  componentDidUpdate(_, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      localStorage.setItem('contactList', JSON.stringify(newContacts));
    }

    if (newContacts.length > prevContacts.length && prevContacts.length !== 0) {
      this.toggle();
    }

    if (newContacts.length >= 9) {
      const message = 'Your memory is full. Please, delete some contacts!';
      const typeOfMessage = 'error';

      this.showNotification(typeOfMessage, message);
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      const message = `${contact.name} is already in contacts.`;
      const typeOfMessage = 'warn';

      return contacts.some(contact => contact.name.includes(name))
        ? this.showNotification(typeOfMessage, message)
        : { contacts: [contact, ...contacts] };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
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

  showNotification = (type, message) =>
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
            <Time />
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
            <ContactList
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
