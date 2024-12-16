import { User } from "firebase/auth";
import { doc, Firestore, getDoc, setDoc } from "firebase/firestore";

export const createUser = async (db: Firestore, user: User) => {
  if (!db) {
    throw new Error("Database is required");
  }
  if (!user) {
    throw new Error("User is required");
  }
  
  const userDocRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userDocRef);
  
  if (!userDoc.exists()) {
    // If user doesn't exist, create a new user document
    try {
      await setDoc(userDocRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    } catch(err) {
      console.error("Error creating user doc", err)
    }
  }
}