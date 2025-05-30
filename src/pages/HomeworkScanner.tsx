
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, ArrowLeft, CheckCircle, AlertTriangle, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeworkScanner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Camera className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-800">Homework Scanner</h1>
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
          <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Homework Scanner & Feedback
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Scan your written work for instant feedback on correctness, missing steps, and areas to improve
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
            Scan Your First Assignment
          </Button>
        </div>
      </section>

      {/* Feedback Types */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Comprehensive Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Correctness Check</CardTitle>
              <CardDescription>Verify if your answers and methods are accurate</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle>Missing Steps</CardTitle>
              <CardDescription>Identify gaps in your solution process</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Weak Areas</CardTitle>
              <CardDescription>Pinpoint concepts that need more practice</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Improvement Tips</CardTitle>
              <CardDescription>Get specific suggestions for better solutions</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Capture Your Work</h3>
                <p className="text-gray-600">Take a clear photo of your handwritten homework, assignments, or practice problems using your device's camera.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">Our advanced OCR and AI engine reads your handwriting and analyzes each step of your solution for accuracy and completeness.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Detailed Feedback</h3>
                <p className="text-gray-600">Receive instant feedback highlighting correct steps, errors, missing work, and personalized suggestions for improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Smart Feedback Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span>Logic Verification</span>
              </CardTitle>
              <CardDescription>
                Goes beyond just checking final answers - validates the logical flow and mathematical 
                reasoning in each step of your solution process.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-blue-600" />
                <span>Personalized Recommendations</span>
              </CardTitle>
              <CardDescription>
                Based on your mistakes and learning patterns, get specific practice recommendations 
                and targeted exercises to strengthen weak areas.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <span>Error Pattern Recognition</span>
              </CardTitle>
              <CardDescription>
                Identify recurring mistakes and misconceptions across multiple assignments 
                to address fundamental understanding gaps.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                <span>Progress Tracking</span>
              </CardTitle>
              <CardDescription>
                Monitor improvement over time with detailed analytics showing your growth 
                in different topics and problem-solving approaches.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-violet-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Improve Your Homework Quality</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get instant feedback and turn every assignment into a learning opportunity
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 text-lg px-8 py-4">
            Start Scanning Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomeworkScanner;
