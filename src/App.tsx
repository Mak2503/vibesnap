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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/feed" replace />,
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
      path: "/signin",
      element: <Signin></Signin>,
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  );
}

export default App;
