import { lazy, Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./styles/global.scss";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";

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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: "form-intro",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <FormIntroPage />
          </Suspense>
        ),
      },
      {
        path: "form",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <FormPage />
          </Suspense>
        ),
      },
      {
        path: "report",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ReportPage />
          </Suspense>
        ),
      },
      {
        path: "business",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <BusinessPage />
          </Suspense>
        ),
      },
      {
        path: "business/result",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <BusinessResultPage />
          </Suspense>
        ),
      },
      {
        path: "document-intro",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <DocumentIntroPage />
          </Suspense>
        ),
      },
      {
        path: "document",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <DocumentPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
