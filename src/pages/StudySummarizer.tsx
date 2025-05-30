
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, ArrowLeft, FileText, BookOpen, Brain, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudySummarizer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Youtube className="w-8 h-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-800">Study Summarizer</h1>
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
          <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Youtube className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Smart YouTube & PDF Summarizer
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform videos and documents into intelligent study aids with auto-generated summaries, quizzes, and flashcards
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
            Upload Your First Document
          </Button>
        </div>
      </section>

      {/* Input Types */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Supported Content Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Youtube className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-xl">YouTube Videos</CardTitle>
              <CardDescription>
                Paste any YouTube link and get chapter-wise summaries, key points extraction, 
                and searchable transcripts for efficient learning.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">PDF Documents</CardTitle>
              <CardDescription>
                Upload lecture notes, textbooks, or research papers for automatic summarization 
                and quiz generation based on content.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Generated Content */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Chapter Summaries</CardTitle>
              <CardDescription>Condensed key points from each section</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Auto MCQs</CardTitle>
              <CardDescription>Practice questions generated from content</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Flashcards</CardTitle>
              <CardDescription>Spaced repetition cards for memorization</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Search className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Smart Search</CardTitle>
              <CardDescription>Find specific topics within videos instantly</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Advanced Features</h2>
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="w-6 h-6 text-blue-600" />
                  <span>Transcript-Based Search</span>
                </CardTitle>
                <CardDescription>
                  Ask questions like "Explain Bernoulli's theorem" and jump directly to the relevant 
                  part of the video with timestamp precision.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-purple-600" />
                  <span>Story Explanations</span>
                </CardTitle>
                <CardDescription>
                  Complex concepts transformed into easy-to-understand narratives and analogies 
                  that make learning memorable and engaging.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Transform Your Study Materials</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Turn hours of content into minutes of focused learning
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-50 text-lg px-8 py-4">
            Try It Free Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudySummarizer;
