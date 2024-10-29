import { Error, Input, InputName } from './ContactFormInput.styled';

interface ContactFormInputProps {
  id: string;
  label: string;
  type: string;
  name: string;
}

export function ContactFormInput({
  label,
  name,
  id,
  type,
}: ContactFormInputProps) {
  return (
    <label htmlFor={id}>
      <InputName>{label}</InputName>
      <Input type={type} name={name} id={id} required />
      <Error name={name} component="div" />
    </label>
  );
}
