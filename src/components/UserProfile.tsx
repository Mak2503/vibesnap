const UserProfile: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  return (
    <img
      id="profile"
      className="w-14 h-14 rounded-full"
      src={imgUrl}
      alt="profile"
    />
  );
};

export default UserProfile;
