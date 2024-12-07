import { useContext } from "react";
import UserProfile from "../components/UserProfile";
import { AuthContext } from "../AuthContext";
import { getAuth, signOut } from "firebase/auth";

const Profile: React.FC = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth();
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <main className="flex flex-col gap-6 relative h-full">
      <div className="absolute">
        <img src="icons/back-arrow.svg" alt="back-arrow" />
      </div>
      <div className="-m-6 min-w-80 max-h-[200px]">
        <img
          className="w-full object-cover max-h-[200px] rounded-b-xl"
          src="https://s3-alpha-sig.figma.com/img/d4b7/bb5d/bd8b3943a763e1d2e13b607efc1e224e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p1O21D-G7EkEGiT8yrJNfPVhRVuP7mLkPaHOskXW82VgeX1~uipRK1Q52PUtibvlS9PjSCSRIZ7L1D73aIcu41qMkznCE0PkSQT-oBbUStuvCl2q4JpEQ-3xAXrCFeHE2xYjyxeUPnxilxmWltGjqABaESu-KClo7wEHduaaGwweRDYoj9S6i-axpndnBkcECuhHkq5G9hSokGDLI0qPweMkwVZayXHB0jAq2nHWWzrEqtv4X96wRfgaqUQ8kCQMXinSq6IwGe6hFdx5eiELVXg79m8UAnTQa9PodSNFsNrNBuUjCyIQdWbU0deOMklBWKLxQyh3eKXT32xs2esnog__"
          alt="cover"
        />
      </div>
      <div className="flex justify-between items-end gap-8 -mt-16">
        <UserProfile className="w-28 h-28" imgUrl={user?.photoURL || ""} />
        <button className="border border-black border-opacity-35 w-52 px-4 py-1.5 text-xs rounded-full font-bold">
          Edit Profile
        </button>
        <button
          className="bg-red-600 w-20 flex justify-center text-white px-5 py-1 rounded-full"
          onClick={() => {
            handleSignOut();
          }}
        >
          <img src="icons/logout.svg" alt="logout" />
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-extrabold">{user?.displayName}</h1>
        <p className="text-sm mt-2">
          Just someone who loves designing, sketching, and finding beauty in the
          little things 💕
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">My Posts</h2>
        <div></div>
      </div>
      <button className="absolute bottom-0 right-0 p-5 font-bold bg-black rounded-full">
        <img src="icons/plus.svg" alt="plus" />
      </button>
    </main>
  );
};

export default Profile;
