export const Header = ({ children, type, ...props }) => {
  if (!type) type = "default";

  return <header className={ props.className }>{children}</header>;
};
