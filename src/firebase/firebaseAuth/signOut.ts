import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Logs out from all auth providers
const logout = () => {
  signOut(auth);
};

export default logout;
