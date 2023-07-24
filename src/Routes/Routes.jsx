import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import ViewDetail from "../Pages/ViewDetail/ViewDetail";
import Admission from "../Pages/Admission/Admission";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Home/Registration/Registration";
import Mycollege from "../Pages/Mycollege/Mycollege";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/colleges',
        element: <Colleges></Colleges>
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/mycollege',
        element: <Mycollege></Mycollege>
      },
      {
        path: '/:id',
        element: <ViewDetail></ViewDetail>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      }
    ]
  },
]);