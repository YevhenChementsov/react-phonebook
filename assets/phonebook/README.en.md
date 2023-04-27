**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md).**

# Phonebook

Write an application to store your phonebook contacts.

## Step 1.

The application should consist of a form and a list of contacts. In the current
step, implement adding the contact name and displaying the contact list. The
application should not save contacts between different sessions (page refresh).

Use this input markup with inline validation for the contact name.

```html
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="A name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
  required
/>
```

The state stored in the parent component `App>` must be of the following form,
no new properties can be added.

```js
state = {
  contacts: [],
  name: '',
};
```

Each contact must be an object with the properties `name` and `id`. To generate
identifiers, use any suitable package, e.g.
[uuid](https://www.npmjs.com/package/uuid#version-4). After completing this
step, the application should look something like this.

![preview](./mockup/step-1.png)

## Step 2

Extend the functionality of the app by allowing users to add phone numbers. To
do this, add `<input type="tel">` to the form, and a property to store its value
in the state.

```js
state = {
  contacts: [],
  name: '',
  number: '',
};
```

Use this input markup with inline validation for the phone number.

```html
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="The phone number must consist of the digits and may contain spaces, dashes, parentheses and may begin with +"
  required
/>
```

After completing this step, the application should look something like this.

![preview](./mockup/step-2.png)

## Step 3

Add a search field that you can use to filter your contact list by name.

- The search field is a formless input, the value of which is written to the
  state (controlled item).
- The filtering logic should be case insensitive.

```js
state = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};
```

![preview](./mockup/step-3.gif)

When we work on new functionality, it can be convenient to hardcode some of the
data into a state. This avoids the need to manually enter data in the interface
to test the new functionality. For example you could use this initial state.

```js
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};
```

## Step 4

If your application is implemented in a single `<App>` component, perform
refactoring by separating the relevant parts into separate components. The state
of the root component `<App>`, only the properties `contacts` and `filter` will
remain.

```js
state = {
  contacts: [],
  filter: '',
};
```

Four components are sufficient: add contact form, contact list, contact list
item and search filter.

After refactoring, the root component of the application will look like this.

```html
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

## Step 5

Prevent the user from being able to add contacts whose names are already in the
phonebook. If you try to do so, display an `alert` warning message.

![preview](./mockup/step-5.png)

## Step 6

Extend the functionality of the app by allowing the user to delete previously
saved contacts.

![preview](./mockup/step-6.gif)

## Step 7

Add phonebook contact storage to `localStorage`. Use the methods of the
lifecycle.

- When a contact is added or deleted, contacts are stored in the local storage.
- When the application is loaded, contacts are read from local storage and are
  written to the state.
