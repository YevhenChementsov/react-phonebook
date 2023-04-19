import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';

export const ContactFormInput = ({ label, name, id, type }) => {
  return (
    <label htmlFor={id}>
      <h3>{label}</h3>
      <Field type={type} name={name} id={id} required />
      <ErrorMessage name={name} component="div" />
    </label>
  );
};

ContactFormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
