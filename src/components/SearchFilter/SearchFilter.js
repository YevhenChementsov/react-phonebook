import PropTypes from 'prop-types';

export const SearchFilter = ({ title, value, onChangeFilter }) => {
  return (
    <label>
      <h2>{title}</h2>
      <input
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Filter by name"
      />
    </label>
  );
};

SearchFilter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
