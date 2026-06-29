function PrimaryButton({ children, icon: Icon, ...props }) {
  return (
    <button className="primary-button" type="button" {...props}>
      {Icon && <Icon />}
      <span>{children}</span>
    </button>
  );
}

export default PrimaryButton;
