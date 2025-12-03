import { lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./styles/global.scss";
import Layout from "./components/Layout";

const MainPage = lazy(() => import("./pages/mainPage/MainPage"));
const FormPage = lazy(() => import("./pages/formPage/FormPage"));
const ReportPage = lazy(() => import("./pages/reportPage/ReportPage"));
const BusinessPage = lazy(() => import("./pages/businessPage/BusinessPage"));
const BusinessResultPage = lazy(
  () => import("./pages/businessResultPage/BusinessResultPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const FormIntroPage = lazy(() => import("./pages/FormIntroPage"));
const DocumentIntroPage = lazy(() => import("./pages/DocumentIntroPage"));
const DocumentPage = lazy(() => import("./pages/documentPage/DocumentPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/main" replace />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "main",
        element: <MainPage />,
      },
      {
        path: "form-intro",
        element: <FormIntroPage />,
      },
      {
        path: "form",
        element: <FormPage />,
      },
      {
        path: "report",
        element: <ReportPage />,
      },
      {
        path: "business",
        element: <BusinessPage />,
      },
      {
        path: "business/result",
        element: <BusinessResultPage />,
      },
      {
        path: "document-intro",
        element: <DocumentIntroPage />,
      },
      {
        path: "document",
        element: <DocumentPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
