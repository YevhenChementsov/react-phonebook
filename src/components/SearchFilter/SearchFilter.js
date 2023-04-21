import PropTypes from 'prop-types';
import { Input } from './SearchFilter.styled';

export const SearchFilter = ({ value, onChangeFilter }) => {
  return (
    <label>
      <Input
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Search by name"
      />
    </label>
  );
};

SearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
