"use client";

import { NextUIProvider } from "@nextui-org/system";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  );
};

export default Provider;
