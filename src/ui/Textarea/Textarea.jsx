import "./Textarea.scss";
import classNames from "classnames";

const Textarea = ({ className, ...props }) => {
  return (
    <div className="textarea__container">
      <textarea className={classNames("textarea", className)} {...props} />
    </div>
  );
};

export default Textarea;