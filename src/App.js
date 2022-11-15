import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Heading from "./Components/Heading/Heading";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Rootlayout from "./Components/Rootlayout/Rootlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/Errorpage/ErrorPage";
import Movies from "./Components/Movies/Movies";
import Loading from "./Components/Loading/Loading";
function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Rootlayout />,children: [
        { index: true, element: <Home /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "movies", element: <Movies /> },
        { path: "*", element: <ErrorPage /> },],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Loading></Loading> */}
    </>
  );
}

export default App;
