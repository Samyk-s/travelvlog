import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/home/home.pages";
import HomePageLayout from "../layout/homepage/homepage.layout";
import TravelTips from "../pages/TravelTips/Traveltips";
import NotFoundPage from "../pages/Notfound/notfound.page";
import DestinationsGrid from "../pages/destinations/destinations.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: "/destinations",
         element: <DestinationsGrid />,
        },
      {
        path: "/traveltips",
        element: <TravelTips />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routing;
