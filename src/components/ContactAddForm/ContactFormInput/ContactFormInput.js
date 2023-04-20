import PropTypes from 'prop-types';
import { Error, InputName, Input } from './ContactFormInput.styled';

export const ContactFormInput = ({ label, name, id, type }) => {
  return (
    <label htmlFor={id}>
      <InputName>{label}</InputName>
      <Input type={type} name={name} id={id} required />
      <Error name={name} component="div" />
    </label>
  );
};

ContactFormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
