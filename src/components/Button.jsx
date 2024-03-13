const Button = props => {
  const { onclick, className, text } = props;
  return (
    <button onClick={() => onclick} className={className}>
      {text}
    </button>
  );
};

export default Button;
