import Login from "./scenes/login/Login";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from "./scenes/register/Register";
import ErrorPage from "./scenes/error-page";
import NavBar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import SocialBar from "./components/socialbar/SocialBar";
import Home from "./scenes/home/Home";
import Profile from "./scenes/profile/Profile";

function App() {
  const currentUser = true;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <SocialBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/",
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
