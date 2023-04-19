import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { ContactFormInput } from './ContactFormInput/ContactFormInput';

const initialValues = {
  name: '',
  number: '',
};

const contactAddValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "A name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.",
    })
    .min(2)
    .required(),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      {
        message:
          'The phone number must consist of the digits and may contain spaces, dashes, parentheses and may begin with +',
      },
    )
    .required(),
});

export const ContactAddForm = ({ onSubmit }) => {
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleAddContact = async (values, { resetForm, setSubmitting }) => {
    try {
      await onSubmit(values);
      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactAddValidationSchema}
      onSubmit={handleAddContact}
    >
      <Form autoComplete="off">
        <ContactFormInput
          label="Name"
          name="name"
          id={nameInputId}
          type="text"
        />
        <ContactFormInput
          label="Number"
          name="number"
          id={numberInputId}
          type="tel"
        />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
