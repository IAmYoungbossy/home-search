import { User } from "firebase/auth";
import addNewUserData from "./addNewData";
import { actionType } from "../../utilities/types";
import { DocumentData, QuerySnapshot } from "firebase/firestore";

const createNewUserData = async (
  documents: QuerySnapshot<DocumentData>,
  user: User,
  authProvider: string,
  dispatch: React.Dispatch<actionType>
) => {
  if (documents.docs.length === 0)
    await addNewUserData(user, authProvider, dispatch);
};

export default createNewUserData;
