import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Register from "../Pages/Register";
import SignIn from './../Pages/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h2>Not Found ...</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>,
      },

    ]
  },
]);

export default router;