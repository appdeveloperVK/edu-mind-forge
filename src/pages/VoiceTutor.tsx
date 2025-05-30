
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, ArrowLeft, Volume2, Ear, Palette, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import VoiceTutorDemo from '../components/VoiceTutorDemo';

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

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-8">
        <VoiceTutorDemo />
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
    </div>
  );
};

export default VoiceTutor;
