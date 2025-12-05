import "./Button.scss";
import classNames from "classnames";

const Button = ({ className = "", title, icon, ...props }) => {
  return (
    <button className={classNames("button", className)} {...props}>
      {icon && <span className="button__icon">{icon}</span>}
      {title && <span className="button__text">{title}</span>}
    </button>
  );
};

export default Button;
