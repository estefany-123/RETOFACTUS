import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import LoginPage from "./pages/login";
import FacturasPage from "./pages/facturas";
import { useAuth } from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FacturaPage from "./pages/factura";
import NuevaFacturaPage from "./pages/nuevaFactura";

function App() {
  const queryClient = new QueryClient();
  const { authenticated } = useAuth();
  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        {authenticated ?
          <>
            <Route element={<FacturasPage />} path="/" />
            <Route element={<NuevaFacturaPage />} path="/factura" />
            <Route element={<FacturaPage />} path="/:number" />
          </>
        :
          <Route element={<IndexPage />} path="/" />
        }
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
