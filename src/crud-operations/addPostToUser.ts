import { doc, DocumentReference, Firestore, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

export const addPostToUser = async (db: Firestore, userId: string, postRef: DocumentReference) => {
  if (!db) {
    throw new Error("Database is required");
  }
  if (!userId || !postRef) {
    throw new Error("User ID and Post Reference is required");
  }

  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) {
    throw new Error("User doesn't exist");
  }

  // Getting feeds data from user
  const userFeedsData = userDoc.data()!.posts

  try {
    // adding new feed along with existing feeds
    await setDoc(userDocRef, {
      posts: [...userFeedsData, postRef],
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch(err) {
    throw new Error(`Error adding feed to user: ${err}`);
  }
}