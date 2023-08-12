import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/Add/Add";
import Orders from "./pages/Orders/Orders";
import Message from "./pages/Message/Message";
import Messages from "./pages/Messages/Messages";
import MyGigs from "./pages/MyGigs/MyGigs";
import "./app.scss";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/gigs", element: <Gigs /> },
        { path: "/gig:id", element: <Gig /> },
        { path: "/orders", element: <Orders /> },
        { path: "/mygigs", element: <MyGigs /> },
        { path: "/add", element: <Add /> },
        { path: "/messages", element: <Messages /> },
        { path: "/message:id", element: <Message /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
