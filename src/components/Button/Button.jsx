import "./Button.css";

const Button = ({ text, onclick }) => {
  return (
    <button type="submit" onClick={onclick} className="buttonsForm">
      {text}
    </button>
  );
};

export default Button;
