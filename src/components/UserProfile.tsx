const UserProfile: React.FC<{
  imgUrl: string;
  className?: string;
}> = ({ imgUrl, className = "w-14 h-14" }) => {
  return (
    <img
      id="profile"
      className={`${className} rounded-full`}
      src={imgUrl}
      alt="profile"
    />
  );
};

export default UserProfile;
