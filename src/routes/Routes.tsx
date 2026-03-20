import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { publicRoutes } from "./PublicRoutes";
import { routesGenerator } from "@/utils/Generator/RoutesGenerator";
import PageSkeleton from "@/components/PageSkeleton";

const App = lazy(() => import("../App"));
const NotFound = lazy(() => import("@/pages/NotFound"));


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageSkeleton />}>
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
