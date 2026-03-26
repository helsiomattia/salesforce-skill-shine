const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/salesforce-skill-shine">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<CareerPage categoryId="admin" />} />
          <Route path="/developer" element={<CareerPage categoryId="developer" />} />
          <Route path="/consultant" element={<CareerPage categoryId="consultant" />} />
          <Route path="/architect" element={<CareerPage categoryId="architect" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
