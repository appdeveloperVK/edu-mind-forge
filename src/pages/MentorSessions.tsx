
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ArrowLeft, Video, Calendar, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentorSessions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-800">Mentor Sessions</h1>
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
          <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Weekly Human Mentor Sessions
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            One-on-one video calls with real mentors for personalized guidance and motivation
          </p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
            Schedule Your Session
          </Button>
        </div>
      </section>

      {/* Session Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mentorship Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Video className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle>1-on-1 Calls</CardTitle>
              <CardDescription>Personal video sessions with expert mentors</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Progress Review</CardTitle>
              <CardDescription>Detailed analysis of your learning journey</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Motivation Support</CardTitle>
              <CardDescription>Encouragement and goal-setting assistance</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Scheduling</CardTitle>
              <CardDescription>Flexible scheduling with automated reminders</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Connect with Expert Mentors</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from experienced educators and industry professionals
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-50 text-lg px-8 py-4">
            Book Your Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MentorSessions;
