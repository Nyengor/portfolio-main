import {createBrowserRouter, RouterProvider,} from "react-router";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App() {
  const router = createBrowserRouter([

  {path: "/", element: <Home/>},
  {path: "/navbar", element: <Navbar/>},
  {path: "/footer", element: <Footer/>}
]);


return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

