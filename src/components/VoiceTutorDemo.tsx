
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { VoiceTutorService } from '../services/voiceTutor';
import { VoiceSession } from '../types';
import { Mic, MicOff, Volume2 } from 'lucide-react';

const VoiceTutorDemo = () => {
  const [session, setSession] = useState<VoiceSession | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [responses, setResponses] = useState<string[]>([]);

  const startSession = async () => {
    try {
      const newSession = await VoiceTutorService.startVoiceSession('demo-user', 'en-US');
      setSession(newSession);
      console.log('Voice session started:', newSession);
    } catch (error) {
      console.error('Failed to start session:', error);
    }
  };

  const toggleListening = async () => {
    if (!session) {
      await startSession();
      return;
    }

    if (isListening) {
      await VoiceTutorService.stopListening();
      setIsListening(false);
    } else {
      try {
        await VoiceTutorService.startListening(session.id);
        setIsListening(true);
      } catch (error) {
        console.error('Failed to start listening:', error);
      }
    }
  };

  const speakText = async (text: string) => {
    try {
      await VoiceTutorService.speakText(text);
      setResponses(prev => [...prev, `AI: ${text}`]);
    } catch (error) {
      console.error('Failed to speak text:', error);
    }
  };

  const handleTextSubmit = () => {
    if (textInput.trim()) {
      setResponses(prev => [...prev, `You: ${textInput}`]);
      // Simulate AI response
      speakText(`I understand you said: ${textInput}. Let me help you with that!`);
      setTextInput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Voice Tutor Demo</CardTitle>
          <CardDescription>
            This demonstrates how the backend voice tutor service integrates with the frontend
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Session Status */}
          <div className="flex items-center justify-between">
            <span>Session Status: {session ? 'Active' : 'Not Started'}</span>
            <Button onClick={startSession} disabled={!!session}>
              Start New Session
            </Button>
          </div>

          {/* Voice Controls */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleListening}
              variant={isListening ? "destructive" : "default"}
              className="flex items-center space-x-2"
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              <span>{isListening ? 'Stop Listening' : 'Start Listening'}</span>
            </Button>
            <Button
              onClick={() => speakText('Hello! I am your AI voice tutor.')}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Volume2 className="w-4 h-4" />
              <span>Test TTS</span>
            </Button>
          </div>

          {/* Text Input Alternative */}
          <div className="flex space-x-2">
            <Input
              placeholder="Type your question here..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleTextSubmit()}
            />
            <Button onClick={handleTextSubmit}>Send</Button>
          </div>

          {/* Conversation History */}
          <div className="bg-gray-50 p-4 rounded-lg max-h-60 overflow-y-auto">
            <h3 className="font-semibold mb-2">Conversation:</h3>
            {responses.length === 0 ? (
              <p className="text-gray-500">Start a conversation...</p>
            ) : (
              responses.map((response, index) => (
                <div key={index} className="mb-2 p-2 bg-white rounded">
                  {response}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceTutorDemo;
