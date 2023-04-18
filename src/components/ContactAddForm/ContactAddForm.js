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

const ContactFormInput = ({ label, name, id, type }) => {
  return (
    <label htmlFor={id}>
      <h3>{label}</h3>
      <Field type={type} name={name} id={id} required />
      <ErrorMessage name={name} component="div" />
    </label>
  );
};

export const ContactAddForm = ({ onSubmit }) => {
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    onSubmit(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactAddValidationSchema}
      onSubmit={handleSubmit}
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

ContactFormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
