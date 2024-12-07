const MyPostFeed = () => {
  return (
    <div className="relative max-h-[192px] bg-gradient-to-r from-[#0000] to-[#00000080] rounded-2xl">
      <img
        className="rounded-2xl w-full object-cover max-h-[192px]"
        src="https://s3-alpha-sig.figma.com/img/3d74/8cb4/2f8d406fbe46243a0c8ca283df76b831?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sd4SJZ-o9VLso~AZwSRaPIt8QKkDd6khYJ66m5E2u2qO~3wSZfUgMMyMHfSKzmvdlHKVnbMsyPILL0nNAS0Jb8HW0ofG--olanAg~9u0jzS3s35TuRnY-SrJ65dU92LgaewDTg7t3Z0FKfqs0DwNBNkXmvVjZGFEke0IVPTKN26vUc2X1YhOVMboekjWV599sVEO-gVc0YxIsFKY27a-2FQ1wWoTh~hMB7ZLdQUn0YDPo2WfcVLtrVPp~WAUv5dLiU5a0Udd0nd0hhteMLP9faNM38Acbie2ph0LB12y2Hwz5mzcMeY1DJNU3HRFEfUOZSaJDuRo2DAKm-fvWQYH6A__"
        alt="post_1"
      />
      <div className="absolute top-3 right-3 rounded-2xl text-xs px-2 py-1 bg-white text-black">
        1/2
      </div>
      <div className="absolute bottom-2 left-4">
        <p className="font-bold text-white">Design Meet</p>
        <div className="flex items-center gap-2 text-white">
          <img src="icons/heart-unliked.svg" alt="heart" />
          <p>67</p>
        </div>
      </div>
    </div>
  );
};

export default MyPostFeed;
