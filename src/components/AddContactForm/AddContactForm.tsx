import { Form, Formik, FormikHelpers } from 'formik';
import { nameRegExp, phoneRegExp } from 'helpers/validationRegExp';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { SubmitFormButton } from './AddContactForm.styled';
import { ContactFormInput } from './ContactFormInput/ContactFormInput';

interface ContactAddFormProps {
  onSubmit: (values: ContactFormValues) => void;
}

interface ContactFormValues {
  name: string;
  number: string;
}

const initialValues: ContactFormValues = {
  name: '',
  number: '',
};

const contactAddValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(25)
    .matches(nameRegExp, {
      message:
        "A name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.",
    })
    .required(),
  number: Yup.string()
    .max(24)
    .matches(phoneRegExp, {
      message:
        'The phone number must consist of the digits and may contain spaces, dashes, parentheses and may begin with +',
    })
    .required(),
});

export function ContactAddForm({ onSubmit }: ContactAddFormProps) {
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleAddContact = async (
    values: ContactFormValues,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormValues>,
  ) => {
    try {
      await Promise.resolve(onSubmit(values));
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
        <SubmitFormButton type="submit">Add contact</SubmitFormButton>
      </Form>
    </Formik>
  );
}
