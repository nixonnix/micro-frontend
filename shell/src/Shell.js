import React, {lazy} from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppDrawer from "./AppDrawer";
import AppBar from "./AppBar";
import Viewport from "./Viewport";
import { useLocalStorageSync } from "./useLocalStorageSync";
import { ServiceProvider } from "./Service";
import { loadComponent } from "./framework/utils/loadComponent";
import InjectComponent from "./framework/InjectComponent";
import ComponentError from "./ErrorBoundary/ComponentError";

const DashboardService = lazy(
  loadComponent({ context: "dashboard", type: "route" })
);
const OrderService = React.lazy(
  loadComponent({ context: "order", type: "route" })
);
const ProfilePage = React.lazy(
  loadComponent({ context: "profile", type: "route" })
);

function useDrawer() {
  const { value, setItem } = useLocalStorageSync(
    "@shared-routing/appdrawer/open"
  );

  return {
    open: value,
    closeDrawer() {
      setItem(false);
    },
    openDrawer() {
      setItem(true);
    },
  };
}

function Loading() {
  return (
    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  );
}

export default function Shell() {
  const drawer = useDrawer();

  return (
    <ServiceProvider>
      <BrowserRouter>
        <ComponentError message="Unable to load this application!!!!">
          <Viewport>
            <Box display="flex" flex={1}>
              <AppBar drawer={drawer} />
              <AppDrawer drawer={drawer} />
              <React.Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="dashboard/*" element={<DashboardService />} />
                  <Route path="orders/*" element={<OrderService />} />
                  <Route path="invoice/*" element={<ProfilePage />} />
                  <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                  />
                </Routes>
              </React.Suspense>
              <InjectComponent />
            </Box>
          </Viewport>
        </ComponentError>
      </BrowserRouter>
    </ServiceProvider>
  );
}
