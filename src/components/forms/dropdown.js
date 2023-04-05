const Dropdown = ({ options }) => {
  return (
    <select>
      {options &&
        options.map((options, i) => <option key={i}>{options.type}</option>)}
    </select>
  );
};

export default Dropdown;
