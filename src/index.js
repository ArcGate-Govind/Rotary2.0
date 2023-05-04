import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Club from "./Component/Club";
import Events from "./Component/Events";
import Media from "./Component/Media";
import ContactUs from "./Component/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Directory from "./Component/Directory";
import Gallery from "./Component/Gallery";
import Home from "./Component/Home";
import Learning from "./Component/Learning";
import EventDetails from "./Component/EventDetails";
import MediaSlug from "./Component/MediaSlug";
import GallerySlug from "./Component/GallerySlug";
import ClubInformation from "./Component/ClubInformation";
import Login from "./Component/Login";
import DirectoryInformation from "./Component/DirectoryInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "directory",
        element: <Directory />,
      },
      {
        path: "club",
        element: <Club />,
      },
      {
        path: "learning",
        element: <Learning />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "eventDetails",
        element: <EventDetails />,
      },
      {
        path: "/mediaslug/:mediaId",
        element: <MediaSlug />,
      },
      {
        path: "/galleryslug/:galleryId",
        element: <GallerySlug />,
      },
      {
        path: "/clubinfo/:clubId",
        element: <ClubInformation />,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path:"/directoryinfo/:DirectoryId",
        element:<DirectoryInformation/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
