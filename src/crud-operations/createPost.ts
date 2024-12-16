import { addDoc, collection, Firestore, serverTimestamp } from "firebase/firestore"
import { Post } from "./types";

export const createPost = async (db: Firestore, post: Post) => {
  if (!db) {
    throw new Error("Database is required");
  }
  if (!post) {
    throw new Error("Post is required");
  }

  const postCollection = collection(db, "posts");

  try {
    const postDoc = await addDoc(postCollection, {
      ...post,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    return postDoc
  } catch(err) {
    console.error("Error creating post", err)
  }
}