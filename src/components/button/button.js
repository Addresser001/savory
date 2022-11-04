import './styles.scss';
const Button = ({
  text,
  color,
  bColor,
  padding,
  margin,
  boxShadow,
  fontSize,
  className,
}) => {
  return (
    <button
      className={`button  ${className}`}
      style={{
        color: `${color}`,
        backgroundColor: `${bColor}`,
        padding: `${padding}`,
        margin: `${margin}`,
        boxShadow: `${boxShadow}`,
        fontSize: `${fontSize}`,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
