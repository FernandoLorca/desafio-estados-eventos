import "./Input.css";

const Input = ({ type, placeholder, changeEvent }) => {
  return (
    <input
      className="inputsForm"
      type={type}
      placeholder={placeholder}
      onChange={changeEvent}
    />
  );
};

export default Input;
