import UserProfile from "../components/UserProfile";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import PostCard from "../components/PostCard";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className="relative h-full">
      <div className="flex items-center gap-4">
        <UserProfile imgUrl={user?.photoURL || ""} />
        <div className="kumbh-font">
          <p className="text-xs">Welcome Back</p>
          <h2 className="font-semibold">{user?.displayName}</h2>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-extrabold">Feeds</h2>
        <div className="mt-6 flex flex-col gap-6">
          <PostCard />
        </div>
      </div>
      <button className="absolute bottom-0 right-0 p-5 font-bold bg-black rounded-full">
        <img src="icons/plus.svg" alt="plus" />
      </button>
    </main>
  );
};

export default Home;
