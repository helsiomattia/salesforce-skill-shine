import { lazy, Suspense } from "react";
import type { ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "./components/layout/AppLayout";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const AssessmentPage = lazy(() => import("./pages/AssessmentPage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GuidePage = lazy(() => import("./pages/GuidePage"));
const GuideDetailPage = lazy(() => import("./pages/GuideDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicyPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.PrivacyPolicyPage })));
const TermsPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.TermsPage })));
const EditorialPolicyPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.EditorialPolicyPage })));

const routeFallback = (
  <div className="flex min-h-[40vh] items-center justify-center text-sm font-medium text-slate-500">
    Carregando...
  </div>
);

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={routeFallback}>{element}</Suspense>
);

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
    errorElement: withSuspense(<NotFound />),
    children: [
      { path: "/", element: withSuspense(<HomePage />) },
      { path: "/assessment", element: withSuspense(<AssessmentPage />) },
      { path: "/contact", element: withSuspense(<ContactPage />) },
      { path: "/about", element: withSuspense(<AboutPage />) },
      { path: "/guide", element: withSuspense(<GuidePage />) },
      { path: "/guide/:id", element: withSuspense(<GuideDetailPage />) },
      { path: "/privacy", element: withSuspense(<PrivacyPolicyPage />) },
      { path: "/terms", element: withSuspense(<TermsPage />) },
      { path: "/editorial-policy", element: withSuspense(<EditorialPolicyPage />) },
      { path: "/assessment/admin", element: withSuspense(<CareerPage categoryId="admin" />) },
      { path: "/assessment/developer", element: withSuspense(<CareerPage categoryId="developer" />) },
      { path: "/assessment/consultant", element: withSuspense(<CareerPage categoryId="consultant" />) },
      { path: "/assessment/architect", element: withSuspense(<CareerPage categoryId="architect" />) },
      { path: "*", element: withSuspense(<NotFound />) },
    ],
  },
], { basename });

const App = () => (
  <MotionConfig reducedMotion="user">
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </MotionConfig>
);

export default App;
