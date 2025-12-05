import "./Input.scss";
import classNames from "classnames";

const Input = ({ className, ...props }) => {
  return (
    <div className="input__container">
      <input className={classNames("input", className)} {...props} />
    </div>
  );
};

export default Input;
