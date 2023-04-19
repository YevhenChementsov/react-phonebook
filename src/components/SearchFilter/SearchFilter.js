import PropTypes from 'prop-types';

export const SearchFilter = ({ value, onChangeFilter }) => {
  return (
    <label>
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
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
