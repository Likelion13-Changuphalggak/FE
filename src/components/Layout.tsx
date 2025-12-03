import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import LoadingSpinner from "./LoadingSpinner";

function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
