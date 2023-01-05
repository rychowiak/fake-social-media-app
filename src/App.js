import { useContext } from "react";
import { colorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Login from "./scenes/login/Login";
import {
  RouterProvider,
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
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [theme, colorMode] = useMode();

  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient();

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/fake-social-media-app/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/fake-social-media-app/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/fake-social-media-app/",
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
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}
export default App;
