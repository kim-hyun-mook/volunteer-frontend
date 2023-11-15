interface OptionProps extends React.HTMLProps<HTMLOptionElement> {
  value: string;
  optionText: string;
}

const Option = ({ value, optionText,...props }: OptionProps) => {
  return (
    <option {...props} value={value}>
      {optionText}
    </option>
  );
};

export default Option;
