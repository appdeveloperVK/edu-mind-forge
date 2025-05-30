
// Core types for the education platform
export interface User {
  id: string;
  email: string;
  name: string;
  grade?: string;
  subjects?: string[];
  learningStyle?: 'visual' | 'auditory' | 'kinesthetic';
  preferredLanguage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MathProblem {
  id: string;
  userId: string;
  problem: string;
  steps: MathStep[];
  isCorrect: boolean;
  feedback: string[];
  subject: 'algebra' | 'geometry' | 'calculus' | 'physics' | 'chemistry';
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: Date;
}

export interface MathStep {
  id: string;
  stepNumber: number;
  expression: string;
  isCorrect: boolean;
  feedback?: string;
  explanation?: string;
}

export interface StudyMaterial {
  id: string;
  userId: string;
  title: string;
  type: 'youtube' | 'pdf' | 'document';
  url?: string;
  content: string;
  summary: string;
  chapters: Chapter[];
  flashcards: Flashcard[];
  quizzes: Quiz[];
  createdAt: Date;
}

export interface Chapter {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  timestamp?: number; // for YouTube videos
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  difficulty: number;
  nextReview: Date;
  reviewCount: number;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TutorSession {
  id: string;
  userId: string;
  messages: TutorMessage[];
  subject: string;
  status: 'active' | 'completed';
  startTime: Date;
  endTime?: Date;
}

export interface TutorMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type: 'text' | 'voice' | 'image';
  timestamp: Date;
  attachments?: string[];
}

export interface HomeworkSubmission {
  id: string;
  userId: string;
  imageUrl: string;
  extractedText: string;
  analysis: HomeworkAnalysis;
  feedback: string[];
  grade?: number;
  createdAt: Date;
}

export interface HomeworkAnalysis {
  correctSteps: number;
  totalSteps: number;
  missingSteps: string[];
  errors: HomeworkError[];
  suggestions: string[];
  weakAreas: string[];
}

export interface HomeworkError {
  stepNumber: number;
  errorType: 'calculation' | 'concept' | 'method';
  description: string;
  correction: string;
}

export interface StudyRoadmap {
  id: string;
  userId: string;
  subject: string;
  goal: string;
  difficulty: string;
  estimatedDuration: number; // in weeks
  modules: RoadmapModule[];
  progress: number; // percentage
  createdAt: Date;
}

export interface RoadmapModule {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
  topics: RoadmapTopic[];
  isCompleted: boolean;
  completedAt?: Date;
}

export interface RoadmapTopic {
  id: string;
  title: string;
  type: 'theory' | 'practice' | 'video' | 'quiz';
  content: string;
  resources: string[];
  isCompleted: boolean;
  completedAt?: Date;
}

export interface SoftwareTutorial {
  id: string;
  userId: string;
  software: string;
  task: string;
  steps: TutorialStep[];
  currentStep: number;
  isCompleted: boolean;
  screenRecording?: string;
  createdAt: Date;
}

export interface TutorialStep {
  id: string;
  instruction: string;
  expectedAction: string;
  screenshot?: string;
  isCompleted: boolean;
  hints: string[];
}

export interface VoiceSession {
  id: string;
  userId: string;
  transcript: string;
  audioUrl?: string;
  drawings: Drawing[];
  responses: VoiceResponse[];
  language: string;
  createdAt: Date;
}

export interface Drawing {
  id: string;
  type: 'diagram' | 'formula' | 'graph';
  data: string; // SVG or canvas data
  description: string;
  timestamp: Date;
}

export interface VoiceResponse {
  id: string;
  text: string;
  audioUrl?: string;
  timestamp: Date;
}

export interface MentorSession {
  id: string;
  userId: string;
  mentorId: string;
  scheduledAt: Date;
  duration: number; // in minutes
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  meetingUrl?: string;
  agenda: string[];
  notes?: string;
  recording?: string;
  feedback?: SessionFeedback;
}

export interface SessionFeedback {
  mentorRating: number;
  studentRating: number;
  mentorNotes: string;
  studentNotes: string;
  nextSessionGoals: string[];
}

export interface Progress {
  userId: string;
  subject: string;
  totalProblems: number;
  correctProblems: number;
  averageAccuracy: number;
  weakTopics: string[];
  strongTopics: string[];
  streakDays: number;
  totalStudyTime: number; // in minutes
  lastActive: Date;
}
