import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login";
import Main from "../Layout/Main";
import Register from "../pages/Register/Register";
import ChefData from "../pages/ChefData/ChefData";
import ChefRecipeLayout from "../Layout/ChefRecipeLayout";
import RecipeDataCard from "../pages/RecipeDataCard/RecipeDataCard";

import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([

  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to='/recipe'></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "recipe",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/recipe",
        element: <ChefData></ChefData>,
      },
    ],
  },
  {
    path: "chef",
    element: <ChefRecipeLayout></ChefRecipeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoutes>
            <RecipeDataCard></RecipeDataCard>
          </PrivateRoutes>
        ),

        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-mahfuz091.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
  {
    path: "blog",
    element: <Blog></Blog>,

  },


]);

export default router;
