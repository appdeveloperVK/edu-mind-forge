
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, ArrowLeft, CheckCircle, Mic, Camera, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MathVerifier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Calculator className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Math/Science Verifier</h1>
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
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Real-Time Math & Science Verification
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Write, type, or speak your math steps and get instant feedback with symbolic solving and step-by-step validation
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Start Solving Now
          </Button>
        </div>
      </section>

      {/* Input Methods */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Multiple Input Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Edit3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Handwriting OCR</CardTitle>
              <CardDescription>Write naturally and let AI read your work</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Mic className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Voice Input</CardTitle>
              <CardDescription>Speak your math problems aloud</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Camera className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>LaTeX Support</CardTitle>
              <CardDescription>Type complex equations with LaTeX</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Step-by-Step Validation</CardTitle>
              <CardDescription>
                Get instant feedback on each step of your solution, not just the final answer. 
                Our SymPy-powered engine checks mathematical logic in real-time.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Immediate Error Detection</CardTitle>
              <CardDescription>
                Spot mistakes as you make them with pop-up explanations that help you understand 
                where you went wrong and how to fix it.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CheckCircle className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Multiple Solution Paths</CardTitle>
              <CardDescription>
                Discover different ways to solve the same problem and learn which approach 
                works best for different types of questions.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CheckCircle className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle>Subject Coverage</CardTitle>
              <CardDescription>
                From basic arithmetic to advanced calculus, physics equations to chemistry 
                balancing - we support all K-12 and college-level topics.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Master Math & Science?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've improved their problem-solving skills
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MathVerifier;
