import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { publicRoutes } from "./PublicRoutes";
import { routesGenerator } from "@/utils/Generator/RoutesGenerator";

const App = lazy(() => import("../App"));
const NotFound = lazy(() => import("@/pages/NotFound"));


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      ...routesGenerator(publicRoutes),
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
