import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Signin = () => {
  const { user } = useContext(AuthContext);
  // redirect user to feed page
  if (user) {
    return <Navigate to="/feed" replace />;
  }

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User", user);
        return user;
      })
      .catch((error) => {
        console.log(GoogleAuthProvider.credentialFromError(error));
      });
  };

  return (
    <main className="relative">
      <img className="w-full" src="banner.svg" alt="banner" />
      <div className="p-5 absolute -bottom-14 flex flex-col justify-center bg-white w-full rounded-t-[60px]">
        <div className="flex justify-center">
          <img src="logo.svg" alt="logo" />
          <h1 className="ml-1 text-2xl font-semibold">Vibesnap</h1>
        </div>
        <p className="mt-1">Moments That Matter, Shared Forever.</p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSignin}
            className="rounded-full px-5 py-3 flex items-center bg-[#292929] text-white"
          >
            <img className="mr-3" src="social-icons/google.svg" alt="google" />
            Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default Signin;
