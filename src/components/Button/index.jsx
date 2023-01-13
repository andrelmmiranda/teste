const Button = (props) => {
  return (
    <input
      className={props.style}
      type="button"
      value={props.value}
      onClick={props.onclick}
    />
  );
};

export default Button;
