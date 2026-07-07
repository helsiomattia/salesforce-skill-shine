import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "./components/layout/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AssessmentPage from "./pages/AssessmentPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import GuidePage from "./pages/GuidePage";
import GuideDetailPage from "./pages/GuideDetailPage";
import { EditorialPolicyPage, PrivacyPolicyPage, TermsPage } from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const basename = import.meta.env.BASE_URL === "/" ? "/" : import.meta.env.BASE_URL.replace(/\/$/, "");

// Create the router using the Data Router API to enable View Transitions
const router = createBrowserRouter([
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
      { path: "/assessment", element: <AssessmentPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/guide", element: <GuidePage /> },
      { path: "/guide/:id", element: <GuideDetailPage /> },
      { path: "/privacy", element: <PrivacyPolicyPage /> },
      { path: "/terms", element: <TermsPage /> },
      { path: "/editorial-policy", element: <EditorialPolicyPage /> },
      { path: "/assessment/admin", element: <CareerPage categoryId="admin" /> },
      { path: "/assessment/developer", element: <CareerPage categoryId="developer" /> },
      { path: "/assessment/consultant", element: <CareerPage categoryId="consultant" /> },
      { path: "/assessment/architect", element: <CareerPage categoryId="architect" /> },
      { path: "*", element: <NotFound /> },
    ],
  },
], { basename });

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
