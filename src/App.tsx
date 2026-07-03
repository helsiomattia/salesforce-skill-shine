import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "./components/layout/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AssessmentPage from "./pages/AssessmentPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import GuidePage from "./pages/GuidePage";
import GuideDetailPage from "./pages/GuideDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create the router using the Data Router API to enable View Transitions
const router = createHashRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/assessment", element: <AssessmentPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/guide", element: <GuidePage /> },
      { path: "/guide/:id", element: <GuideDetailPage /> },
      { path: "/assessment/admin", element: <CareerPage categoryId="admin" /> },
      { path: "/assessment/developer", element: <CareerPage categoryId="developer" /> },
      { path: "/assessment/consultant", element: <CareerPage categoryId="consultant" /> },
      { path: "/assessment/architect", element: <CareerPage categoryId="architect" /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
