import { getAuth, signOut } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>This is Home page</h1>
      <button
        onClick={() => {
          handleSignOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
