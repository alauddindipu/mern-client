import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Shared/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Pages/CourseDetails";
import Course from "../Pages/Course";
import ErrorShow from "../Pages/Shared/ErrorShow/ErrorShow";
import CategoryDetails from "../Pages/CategoryDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorShow></ErrorShow>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }, {
        path: "/login",
        element: <Login></Login>
      }, {
        path: "/register",
        element: <Register></Register>
      }, {
        path: "/products",
        element: (<PrivateRoute>
          <Course></Course>
        </PrivateRoute>)
      }, {
        path: "/products/:id",
        element: (<PrivateRoute>
          <CourseDetails></CourseDetails>
        </PrivateRoute>),
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
      }, {
        path: "/bookcategories/:category",
        element: (<PrivateRoute>
          <CategoryDetails></CategoryDetails>
        </PrivateRoute>),
        loader: ({ params }) => fetch(`http://localhost:5000/bookcategories/${params.category}`)
      }
    ]
  }
]);

export default routes;
