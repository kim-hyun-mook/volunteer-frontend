interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type'> {
  buttonText: string;
}

const Button = ({ buttonText, ...props }: ButtonProps) => {
  return <button {...props}>{buttonText}</button>;
};

export default Button