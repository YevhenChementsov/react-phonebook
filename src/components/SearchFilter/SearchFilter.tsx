import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';
import { Input, Label, SearchBox, SortButton } from './SearchFilter.styled';

interface SearchFilterProps {
  value: string;
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSortContacts: () => void;
}

export function SearchFilter({
  value,
  onChangeFilter,
  onSortContacts,
}: SearchFilterProps) {
  return (
    <Label>
      <SearchBox>
        <FaSearch />
      </SearchBox>
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
}
