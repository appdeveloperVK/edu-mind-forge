
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, ArrowLeft, Volume2, Ear, Palette, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const VoiceTutor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Mic className="w-8 h-8 text-pink-600" />
              <h1 className="text-2xl font-bold text-gray-800">Voice & Drawing Tutor</h1>
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
          <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            AI Voice & Drawing Tutor
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Interactive voice tutor that can speak, listen, and draw diagrams in real-time
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-4">
            Start Voice Session
          </Button>
        </div>
      </section>

      {/* Voice Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Interactive Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Volume2 className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <CardTitle>TTS Voice</CardTitle>
              <CardDescription>Natural speech synthesis for explanations</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Ear className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>STT Input</CardTitle>
              <CardDescription>Advanced speech recognition for questions</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Palette className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Live Drawing</CardTitle>
              <CardDescription>Real-time diagram and formula creation</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Multilingual</CardTitle>
              <CardDescription>Support for multiple languages and accents</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Experience Interactive Learning</h3>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Perfect for visual learners and non-English speakers
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-50 text-lg px-8 py-4">
            Try Voice Tutor
          </Button>
        </div>
      </section>
    </div>
  );
};

export default VoiceTutor;
