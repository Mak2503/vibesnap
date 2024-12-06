import { useContext } from "react";
import UserProfile from "../components/UserProfile";
import { AuthContext } from "../AuthContext";

const EditProfile: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <main className="flex flex-col gap-6 h-full relative">
      <div className="absolute flex gap-4">
        <img src="icons/back-arrow.svg" alt="back-arrow" />
        <p className="text-xl font-bold text-white">Edit Profile</p>
      </div>
      <div className="-m-6 min-w-80 max-h-[200px] relative">
        <img
          className="w-full object-cover max-h-[200px] rounded-b-xl"
          src="https://s3-alpha-sig.figma.com/img/d4b7/bb5d/bd8b3943a763e1d2e13b607efc1e224e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p1O21D-G7EkEGiT8yrJNfPVhRVuP7mLkPaHOskXW82VgeX1~uipRK1Q52PUtibvlS9PjSCSRIZ7L1D73aIcu41qMkznCE0PkSQT-oBbUStuvCl2q4JpEQ-3xAXrCFeHE2xYjyxeUPnxilxmWltGjqABaESu-KClo7wEHduaaGwweRDYoj9S6i-axpndnBkcECuhHkq5G9hSokGDLI0qPweMkwVZayXHB0jAq2nHWWzrEqtv4X96wRfgaqUQ8kCQMXinSq6IwGe6hFdx5eiELVXg79m8UAnTQa9PodSNFsNrNBuUjCyIQdWbU0deOMklBWKLxQyh3eKXT32xs2esnog__"
          alt="cover"
        />
        <div className="absolute right-3 bottom-3 p-1.5 rounded-full bg-[#F4F4F4]">
          <img src="icons/edit.svg" alt="edit" />
        </div>
      </div>
      <div className="flex justify-between items-end gap-8 -mt-16">
        <div className="relative">
          <UserProfile className="w-28 h-28" imgUrl={user?.photoURL || ""} />
          <div className="absolute right-1 bottom-1 p-2 rounded-full bg-[#F4F4F4]">
            <img src="icons/edit.svg" alt="edit" />
          </div>
        </div>
        <button className="border border-black border-opacity-35 w-52 px-4 py-1.5 text-xs rounded-full font-bold">
          Edit Profile
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            className="py-2 border-b border-black focus:ring-0 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Bio</label>
          <input
            type="text"
            className="py-2 border-b border-black focus:ring-0 outline-none"
          />
        </div>
      </div>
      <button className="absolute w-full bottom-0 px-10 py-4 font-bold bg-black text-white rounded-full">
        SAVE
      </button>
    </main>
  );
};

export default EditProfile;
