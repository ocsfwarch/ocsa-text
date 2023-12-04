import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import TextCard from "../components/TextCard";
import ErrorPage from "./ErrorPage";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <TextCard onSave={() => console.log("onSave called")} />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
