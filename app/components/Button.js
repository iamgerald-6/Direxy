import cn from "classnames";

const Button = ({ children, className, ...rest }) => {
  const buttonClasses = cn("rounded-full  py-2", className);
  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
