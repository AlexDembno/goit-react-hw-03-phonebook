import { Component } from 'react';
// import contacts from 'data/contacts';
import FormAddContacts from 'components/FormAddContacts/FormAddContacts';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import Contacts from 'components/Contacts/Contacts';
import style from './PhoneBook.module.css';
import { nanoid } from 'nanoid';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    if (this.findDublicate(name, number)) {
      return alert(`${name} is already in contacts`);
    }
    const { contacts } = this.state;
    this.setState({
      contacts: [{ name: name, number: number, id: nanoid() }, ...contacts],
    });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findDublicate(name) {
    const { contacts } = this.state;
    const result = contacts.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    return result;
  }

  findName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteNumber = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));

    if (contacts && contacts.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>PhoneBook</h1>
        <FormAddContacts addContacts={this.addContacts} />
        <FilterContacts onChange={this.handleChangeFilter} />
        <p className={style.text}>Contacts</p>
        <Contacts filterName={this.findName()} onClick={this.deleteNumber} />
      </div>
    );
  }
}

export default PhoneBook;
