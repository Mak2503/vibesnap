import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import AuthContextProvider from "./AuthContextProvider";
import Protected from "./routes/Protected";
import Profile from "./routes/Profile";
import EditProfile from "./routes/EditProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/feed" replace />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/feed",
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
    {
      path: "/profile",
      element: (
        <Protected>
          <Profile />
        </Protected>
      ),
    },
    {
      path: "/edit-profile",
      element: (
        <Protected>
          <EditProfile />
        </Protected>
      ),
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  );
}

export default App;
