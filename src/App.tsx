
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MathVerifier from "./pages/MathVerifier";
import StudySummarizer from "./pages/StudySummarizer";
import AITutor from "./pages/AITutor";
import HomeworkScanner from "./pages/HomeworkScanner";
import StudyRoadmap from "./pages/StudyRoadmap";
import SoftwareMonitor from "./pages/SoftwareMonitor";
import VoiceTutor from "./pages/VoiceTutor";
import MentorSessions from "./pages/MentorSessions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/math-verifier" element={<MathVerifier />} />
          <Route path="/study-summarizer" element={<StudySummarizer />} />
          <Route path="/ai-tutor" element={<AITutor />} />
          <Route path="/homework-scanner" element={<HomeworkScanner />} />
          <Route path="/study-roadmap" element={<StudyRoadmap />} />
          <Route path="/software-monitor" element={<SoftwareMonitor />} />
          <Route path="/voice-tutor" element={<VoiceTutor />} />
          <Route path="/mentor-sessions" element={<MentorSessions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
