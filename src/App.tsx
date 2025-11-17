import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Dashboard/Home";
import Articles from "./pages/Dashboard/Articles";
import ArticleDetail from "./pages/Dashboard/ArticleDetail";
import MediaAnalysis from "./pages/Dashboard/MediaAnalysis";
import PoliticalTimeline from "./pages/Dashboard/PoliticalTimeline";
import Sources from "./pages/Dashboard/Sources";
import Reports from "./pages/Dashboard/Reports";
import Chat from "./pages/Dashboard/Chat";
import Settings from "./pages/Dashboard/Settings";
import Profile from "./pages/Dashboard/Profile";
import Admin from "./pages/Dashboard/Admin";
import AdvancedOptions from "./pages/Dashboard/AdvancedOptions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Protected Dashboard Routes */}
            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/media" element={<MediaAnalysis />} />
              <Route path="/timeline" element={<PoliticalTimeline />} />
              <Route path="/sources" element={<Sources />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/advanced-options" element={<AdvancedOptions />} />
            </Route>

            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
