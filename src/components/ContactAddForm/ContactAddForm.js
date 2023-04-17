import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

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
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
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

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactAddValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        autoComplete="off"
        style={{ border: '1px solid black', width: '280px', padding: '20px' }}
      >
        <label htmlFor={nameInputId}>
          <h3>Name</h3>
          <Field type="text" name="name" id={nameInputId} required />
          <ErrorMessage name="name" />
        </label>
        <label htmlFor={numberInputId}>
          <h3>Number</h3>
          <Field type="tel" name="number" id={numberInputId} required />
          <ErrorMessage name="number" />
        </label>
        <button type="submit" style={{ display: 'block', marginTop: '20px' }}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
