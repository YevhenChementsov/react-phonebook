export const SearchFilter = ({ value, onChangeFilter }) => {
  return (
    <label>
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};
