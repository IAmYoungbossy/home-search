import {
  actionType,
  APP_ACTION_TYPES,
} from "../../utilities/types";

import {
  doc,
  updateDoc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const updateDocument = async (
  docRef: DocumentReference<DocumentData>,
  dispatch: React.Dispatch<actionType>
) => {
  await updateDoc(doc(db, "USERS", docRef["id"]), {
    docId: docRef["id"],
  });
  dispatch({
    type: APP_ACTION_TYPES.userDocId,
    payload: docRef.id,
  });
};

export default updateDocument;
