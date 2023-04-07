import {
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";

import {
  actionType,
  APP_ACTION_TYPES,
} from "../../utilities/types";

import { User } from "firebase/auth";
import { db } from "../firebaseConfig";

const checkIfOldUser = async (
  user: User,
  dispatch: React.Dispatch<actionType>
) => {
  const q = query(
    collection(db, "USERS"),
    where("userId", "==", user.uid)
  );
  const documents = await getDocs(q);
  if (documents.docs.length > 0) {
    dispatch({
      type: APP_ACTION_TYPES.userDocId,
      payload: documents.docs[0].id,
    });
  }
  return { documents };
};

export default checkIfOldUser;
