const Button = ({ buttonType, children, onClick }) => {
  return (
    <button
      type="submit"
      className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
