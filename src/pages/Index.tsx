
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Youtube, MessageCircle, Camera, Map, Monitor, Mic, Users, BookOpen, Brain, Zap, Target } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Calculator,
      title: "Real-Time Math/Science Verifier",
      description: "Write or type math steps → get instant feedback with symbolic solving and step-by-step validation",
      color: "bg-blue-500",
      features: ["SymPy Integration", "LaTeX Support", "Handwriting OCR", "Voice Input"]
    },
    {
      icon: Youtube,
      title: "Smart YouTube + PDF Summarizer",
      description: "Transform videos and documents into smart study aids with auto-generated summaries and quizzes",
      color: "bg-red-500",
      features: ["Chapter Summaries", "Auto MCQs", "Flashcards", "Video Search"]
    },
    {
      icon: MessageCircle,
      title: "Conversational AI Tutor",
      description: "Interactive AI tutor supporting voice, chat, and image inputs with personalized explanations",
      color: "bg-green-500",
      features: ["Multilingual", "Step-by-step", "Visual Explanations", "Personalized"]
    },
    {
      icon: Camera,
      title: "Homework Scanner + Feedback",
      description: "Scan written work for instant feedback on correctness, missing steps, and areas to improve",
      color: "bg-purple-500",
      features: ["Photo Scanning", "Logic Checking", "Missing Steps", "Weak Areas"]
    },
    {
      icon: Map,
      title: "Study Roadmap Generator",
      description: "Auto-generate personalized learning paths with progress tracking and milestone monitoring",
      color: "bg-orange-500",
      features: ["Custom Roadmaps", "Progress Tracking", "Micro-steps", "Goal Setting"]
    },
    {
      icon: Monitor,
      title: "Software Learning Monitor",
      description: "Live screen monitoring with visual guidance for learning software tools and programming",
      color: "bg-cyan-500",
      features: ["Screen Tracking", "UI Guidance", "Step Verification", "Visual Helpers"]
    },
    {
      icon: Mic,
      title: "AI Voice + Drawing Tutor",
      description: "Interactive voice tutor that can speak, listen, and draw diagrams in real-time",
      color: "bg-pink-500",
      features: ["TTS Voice", "STT Input", "Live Drawing", "Multilingual"]
    },
    {
      icon: Users,
      title: "Weekly Human Mentor Sessions",
      description: "One-on-one video calls with real mentors for personalized guidance and motivation",
      color: "bg-indigo-500",
      features: ["1-on-1 Calls", "Progress Review", "Motivation Support", "Scheduling"]
    }
  ];

  const stats = [
    { label: "Active Learners", value: "50K+", icon: Users },
    { label: "Problems Solved", value: "2M+", icon: Target },
    { label: "Success Rate", value: "94%", icon: Zap },
    { label: "Subjects Covered", value: "25+", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduAI Pro
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            </nav>
            <div className="flex space-x-2">
              <Button variant="outline">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AI-Powered Education
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            From K-12 to College: Real-time math help, smart study aids, adaptive tutoring, and personalized mentorship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
              Start Learning Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-2">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-gray-800">🧠 Core Modules & Features</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered learning ecosystem with multimodal support and real-time feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center text-white`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((feat, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200">
                      {feat}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Multimodal Input Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center space-x-2">
                <Mic className="w-6 h-6 text-blue-600" />
                <span>🧩 Multimodal Input Support</span>
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Voice, text, handwriting (OCR), PDF upload, image input - AI adapts to your learning style
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Voice Input', 'Text Chat', 'Handwriting OCR', 'Document Upload'].map((input, idx) => (
                  <div key={idx} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-sm font-medium text-gray-700">{input}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Learning?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already using AI to master math, science, and beyond
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">EduAI Pro</h4>
              </div>
              <p className="text-gray-400">AI-powered education for the next generation of learners.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Features</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Math Verifier</li>
                <li>AI Tutor</li>
                <li>Study Aids</li>
                <li>Mentorship</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Contact Us</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduAI Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
