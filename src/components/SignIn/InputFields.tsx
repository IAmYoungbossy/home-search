export default function InputFields({
  children,
}: {
  children?: JSX.Element;
}) {
  return (
    <div>
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        required
        type="password"
        name="password"
        placeholder="Password"
      />
      {children}
    </div>
  );
}
