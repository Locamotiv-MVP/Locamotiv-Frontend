import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Discover = lazy(() => import("../pages/discover"));
const Events = lazy(() => import("../pages/events"));
const Moments = lazy(() => import("../pages/moments"));
const Venues = lazy(() => import("../pages/venues"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Discover />
      </Suspense>
    ),
  },
  {
    path: "/discover",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Discover />
      </Suspense>
    ),
  },

  {
    path: "/events",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense>
    ),
  },

  {
    path: "/moments",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Moments />
      </Suspense>
    ),
  },

  {
    path: "/venues",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Venues />
      </Suspense>
    ),
  },
]);

const RouterLayout = () => {
  return <RouterProvider router={router} />;
};

export default RouterLayout;
