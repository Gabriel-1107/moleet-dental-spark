import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Ubicaciones from "./pages/Ubicaciones";
import Precios from "./pages/Precios";
import Doctores from "./pages/Doctores";
import Transport from "./pages/Transport";
import OdontologiaGeneral from "./pages/especialidades/OdontologiaGeneral";
import Endodoncia from "./pages/especialidades/Endodoncia";
import Periodoncia from "./pages/especialidades/Periodoncia";
import CirugiaMaxilofacial from "./pages/especialidades/CirugiaMaxilofacial";
import EsteticaDental from "./pages/especialidades/EsteticaDental";
import Ortodoncia from "./pages/especialidades/Ortodoncia";
import Odontopediatria from "./pages/especialidades/Odontopediatria";
import Guadalajara from "./pages/sucursales/Guadalajara";
import Chapala from "./pages/sucursales/Chapala";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/ubicaciones" element={<Ubicaciones />} />
                <Route path="/precios" element={<Precios />} />
                <Route path="/doctores" element={<Doctores />} />
                <Route path="/especialidades/odontologia-general" element={<OdontologiaGeneral />} />
                <Route path="/especialidades/endodoncia" element={<Endodoncia />} />
                <Route path="/especialidades/periodoncia" element={<Periodoncia />} />
                <Route path="/especialidades/cirugia-maxilofacial" element={<CirugiaMaxilofacial />} />
                <Route path="/especialidades/estetica-dental" element={<EsteticaDental />} />
                <Route path="/especialidades/ortodoncia" element={<Ortodoncia />} />
                <Route path="/especialidades/odontopediatria" element={<Odontopediatria />} />
                <Route path="/sucursales/guadalajara" element={<Guadalajara />} />
                <Route path="/transporte" element={<Transport />} />
                <Route path="/sucursales/chapala" element={<Chapala />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
