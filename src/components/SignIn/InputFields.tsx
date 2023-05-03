export default function InputFields({
  children,
}: {
  children?: JSX.Element;
}) {
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
      />
      {children}
    </div>
  );
}
