
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, ArrowLeft, Target, TrendingUp, CheckCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyRoadmap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Map className="w-8 h-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-800">Study Roadmap</h1>
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
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Map className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Study Roadmap Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Auto-generate personalized learning paths with progress tracking and milestone monitoring
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
            Create Your Roadmap
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Roadmap Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Custom Roadmaps</CardTitle>
              <CardDescription>Tailored learning paths based on your goals</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>Monitor your advancement through topics</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Micro-steps</CardTitle>
              <CardDescription>Break complex topics into manageable chunks</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Goal Setting</CardTitle>
              <CardDescription>Set deadlines and track milestone completion</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Start Your Learning Journey</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Create a personalized roadmap that adapts to your pace and goals
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50 text-lg px-8 py-4">
            Generate Roadmap
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudyRoadmap;
