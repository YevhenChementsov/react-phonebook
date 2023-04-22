import PropTypes from 'prop-types';
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';
import { Input, Label, SortButton, SerchBox } from './SearchFilter.styled';

export const SearchFilter = ({ value, onChangeFilter, onSortContacts }) => {
  return (
    <Label>
      <SerchBox>
        <FaSearch />
      </SerchBox>
      <Input
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Search by name"
      />
      <SortButton type="button" onClick={onSortContacts}>
        <FaSortAlphaDown />
      </SortButton>
    </Label>
  );
};

SearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
