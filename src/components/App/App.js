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

  componentDidUpdate(prevProps, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      localStorage.setItem('contactList', JSON.stringify(newContacts));
    }

    if (newContacts.length > prevContacts.length && prevContacts.length !== 0) {
      this.toggle();
    }

    if (newContacts.length === 9) {
      return window.alert(`Your memory is full. Please delete some contacts!`);
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      return contacts.some(contact => contact.name.includes(name))
        ? window.alert(`${contact.name} is already in contacts.`)
        : { contacts: [contact, ...contacts] };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter),
    );
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { filter, visible, contacts } = this.state;
    const { addContact, changeFilter, deleteContact, toggle } = this;
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
            <SearchFilter value={filter} onChangeFilter={changeFilter} />
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
      </Container>
    );
  }
}
