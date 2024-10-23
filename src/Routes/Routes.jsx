import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Shared/Home/Home";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Pages/CourseDetails";
import Course from "../Pages/Course";
import ErrorShow from "../Pages/Shared/ErrorShow/ErrorShow";
import CategoryDetails from "../Pages/CategoryDetails";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import Profile from "../Pages/dashboardPages/Profile";
import AllUsers from "../Pages/dashboardPages/AllUsers";
import HomeLayout from "../Layout/HomeLayout";
import AddCategory from "../Pages/dashboardPages/AddCategory";
import AllCategories from "../Pages/dashboardPages/AllCategories";
import AddProductUsingReactState from "../Pages/dashboardPages/AddProductUsingReactState";
import TotalProducts from "../Pages/dashboardPages/TotalProducts.jsx";
import Edit from "../Pages/dashboardPages/Edit.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorShow></ErrorShow>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }, {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      }
      , {
        path: "/products",
        element:<Course></Course>
      }
      // , {
      //   path: "/products",
      //   element: (<PrivateRoute>
      //     <Course></Course>
      //   </PrivateRoute>)
      // }
     
      , {
        path: "/products/:id",
        element:<CourseDetails></CourseDetails>, 
        // (<PrivateRoute>
        //   <CourseDetails></CourseDetails>
        // </PrivateRoute>),
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
      }, 
      {
        path: "/bookcategories/:category",
        element: <CategoryDetails></CategoryDetails>,
        // (<PrivateRoute>
        //   <CategoryDetails></CategoryDetails>
        // </PrivateRoute>),
        loader: ({ params }) => fetch(`http://localhost:5000/bookcategories/${params.category}`)
      }, {
        path: "edit/:id",
        element: <Edit></Edit>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "allUsers",
        element: (<PrivateRoute>
          <AllUsers />
        </PrivateRoute>),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "category",
        element: <AddCategory />,
      },
      {
        path: "allCategory",
        element: <AllCategories />,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "products",//to get categories in products page drop down
        element: <AddProductUsingReactState />,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "totalProducts",
        element: <TotalProducts />,
        loader: () => fetch("http://localhost:5000/totalProducts"),
      },


    ],
  },
]);

export default routes;
