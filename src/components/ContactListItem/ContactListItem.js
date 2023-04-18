import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDeleteContact}>Delete</button>
    </>
  );
};

ContactListItem.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
