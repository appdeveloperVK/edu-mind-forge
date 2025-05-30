
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, ArrowLeft, Eye, MousePointer, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareMonitor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Monitor className="w-8 h-8 text-cyan-600" />
              <h1 className="text-2xl font-bold text-gray-800">Software Monitor</h1>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Monitor className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Software Learning Monitor
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Live screen monitoring with visual guidance for learning software tools and programming
          </p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-lg px-8 py-4">
            Start Software Tutorial
          </Button>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Smart Monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Eye className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <CardTitle>Screen Tracking</CardTitle>
              <CardDescription>Real-time monitoring of your screen activity</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <MousePointer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>UI Guidance</CardTitle>
              <CardDescription>Visual helpers showing where to click and type</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Step Verification</CardTitle>
              <CardDescription>Automatic verification of completed actions</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Visual Helpers</CardTitle>
              <CardDescription>Pop-up tips and guidance overlays</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-teal-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Master Any Software</h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Learn with confidence through guided practice and real-time feedback
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-50 text-lg px-8 py-4">
            Try Software Tutorial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SoftwareMonitor;
