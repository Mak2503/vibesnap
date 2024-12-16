import { query, Firestore, collection, getDocs, doc, where, DocumentData } from "firebase/firestore";

export const getPosts = async (db: Firestore, userId: string, isUserPosts?: boolean) => {
  if (!db) {
    throw new Error("Database is required");
  }
  if (!userId) {
    throw new Error("User ID is required");
  }

  const currentUserRef = doc(db, "users", userId);

  const postDocRef = collection(db, "posts");
  const postDoc = query(postDocRef, where("userRef", isUserPosts ? "==" : "!=", currentUserRef));
  
  try {
    const querySnapshot = await getDocs(postDoc);

    const posts: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      posts.push({ id: doc.id, ...doc.data() });
    });
    return posts
  } catch(err) {
    throw new Error(`Error fetching posts: ${err}`)
  }
}