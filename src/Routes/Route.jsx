import { createBrowserRouter } from "react-router";
import AllBills from "../components/AllBills";
import BillDetails from "../components/BillDetails";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import MyBills from "../components/MyBills";
import Register from "../components/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allbills",
        element: <AllBills></AllBills>,
      },
      {
        path: "/billdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-utility-bill-server-1.vercel.app/bills/${params.id}`
          ),
        element: <BillDetails></BillDetails>,
      },
      {
        path: "/mybills",
        element: <MyBills></MyBills>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
