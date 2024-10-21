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
import Messages from "../Pages/dashboardPages/Messages";
import CreateMessage from "../Pages/dashboardPages/CreateMessages";
import MessageDetails from "../Pages/dashboardPages/MessageDetails";
import AllUsers from "../Pages/dashboardPages/AllUsers";
import HomeLayout from "../Layout/HomeLayout";

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
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "allUsers",
        element:(<PrivateRoute>
          <AllUsers />
        </PrivateRoute>),
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "messages/:id",
        element: <MessageDetails />,
      },
      {
        path: "createMessage",
        element: <CreateMessage />,
      },
    ],
  },
]);

export default routes;
