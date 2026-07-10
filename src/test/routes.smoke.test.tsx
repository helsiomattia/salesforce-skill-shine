import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";
import HomePage from "@/pages/HomePage";
import AssessmentPage from "@/pages/AssessmentPage";
import CareerPage from "@/pages/CareerPage";
import GuidePage from "@/pages/GuidePage";
import GuideDetailPage from "@/pages/GuideDetailPage";
import ContactPage from "@/pages/ContactPage";
import { PrivacyPolicyPage } from "@/pages/LegalPage";
import NotFound from "@/pages/NotFound";

const routes = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/assessment", element: <AssessmentPage /> },
      { path: "/assessment/admin", element: <CareerPage categoryId="admin" /> },
      { path: "/guide", element: <GuidePage /> },
      { path: "/guide/:id", element: <GuideDetailPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/privacy", element: <PrivacyPolicyPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

const renderRoute = (path: string) => {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return render(<RouterProvider router={router} />);
};

describe("main routes", () => {
  it.each([
    ["/", /Entenda seus/i],
    ["/assessment", /Escolha sua Carreira/i],
    ["/assessment/admin", /Administrator/i],
    ["/guide", /Guia de Nuvens/i],
    ["/guide/sales-cloud", /Sales Cloud/i],
    ["/contact", /Quer conversar/i],
    ["/privacy", /Política de Privacidade/i],
  ])("mounts %s without crashing", async (path, expectedText) => {
    renderRoute(path);

    await waitFor(() => {
      expect(document.body).toHaveTextContent(expectedText);
    });
  });

  it("mounts the wildcard route without crashing", async () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);

    renderRoute("/rota-inexistente");

    expect(await screen.findByText("404")).toBeInTheDocument();
    consoleError.mockRestore();
  });
});
