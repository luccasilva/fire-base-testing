import { createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterAttributes } from "../../interfaces";
import { firebaseAuth } from "../config";
import { createUserDocument } from "../user/services";

const registerNewUser = async (newUser: RegisterAttributes) => {
  const auth = firebaseAuth;
  createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then(async (userCredential) => {
      const newUserDocument = {
        createdByUid: userCredential.user.uid,
        name: newUser.name,
        email: newUser.email,
      };
      try {
        await createUserDocument(newUserDocument);
      } catch (error: unknown) {
        throw error;
      }
    })
    .catch((error) => {
      throw error;
    });
};

export { registerNewUser };
