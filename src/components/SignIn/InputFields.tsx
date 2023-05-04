export interface IInputFields {
  email: string;
  password: string;
  children?: JSX.Element;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputFields({
  email,
  children,
  password,
  setEmail,
  setPassword,
}: IInputFields) {
  return (
    <div>
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={email.trim()}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        required
        type="password"
        name="password"
        placeholder="Password"
        value={password.trim()}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      {children}
    </div>
  );
}
