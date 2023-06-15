const Consumer = ({ children }) => {
  const style = { color: 'green' };
  return <div className="consumer">{children(style)}</div>;
};

export const RenderProps = () => {
  return <Consumer>
    {(style => (
      <span style={{ color: style.color }}>Olá galera!</span>
    ))}
  </Consumer>;
};
