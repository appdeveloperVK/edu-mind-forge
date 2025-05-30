
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, Mic, Camera, Globe, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AITutor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <MessageCircle className="w-8 h-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">AI Tutor</h1>
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
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Your Personal AI Tutor
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Interactive AI tutor supporting voice, chat, and image inputs with personalized explanations for all subjects
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
            Start Learning Now
          </Button>
        </div>
      </section>

      {/* Interaction Methods */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How to Interact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Text Chat</CardTitle>
              <CardDescription>Type your questions and get detailed explanations</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Mic className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Voice Input</CardTitle>
              <CardDescription>Speak naturally and have conversations</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Camera className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Image Scanning</CardTitle>
              <CardDescription>Upload photos of problems for instant help</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Personalization Features */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Personalized Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <Globe className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Multilingual Support</CardTitle>
              <CardDescription>
                Learn in your preferred language - English, Hindi, Tamil, Spanish, and more. 
                The AI adapts its explanations to your linguistic comfort zone.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <User className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Adaptive Teaching Style</CardTitle>
              <CardDescription>
                The AI learns from your past mistakes, learning speed, and preferred explanation 
                style to customize its teaching approach just for you.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Subject Coverage */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Subject Coverage</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'History', 'Literature', 'Economics', 'Psychology', 'Engineering', 'Art', 'Music'].map((subject, index) => (
            <Card key={index} className="text-center p-4 hover:shadow-lg transition-all hover:scale-105">
              <CardTitle className="text-sm font-medium text-gray-700">{subject}</CardTitle>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Teaching Features</h2>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>Step-by-Step Reasoning</CardTitle>
                <CardDescription>
                  Every explanation breaks down complex concepts into digestible steps, 
                  ensuring you understand the 'why' behind every solution.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>Visual Explanations</CardTitle>
                <CardDescription>
                  Complex concepts illustrated with diagrams, charts, and visual aids 
                  that make abstract ideas concrete and memorable.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>Clarification Checks</CardTitle>
                <CardDescription>
                  The AI regularly checks your understanding and re-explains concepts 
                  if you're unsure, ensuring no gaps in your learning.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Start Your Personalized Learning Journey</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the future of education with your AI companion
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 text-lg px-8 py-4">
            Chat with AI Tutor
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AITutor;
