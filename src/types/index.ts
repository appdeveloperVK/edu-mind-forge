
// Core Types for AI Education Platform

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'mentor' | 'admin';
  preferences: {
    language: string;
    learningStyle: 'visual' | 'auditory' | 'kinesthetic';
    subjects: string[];
  };
  createdAt: Date;
}

export interface MathStep {
  id: string;
  stepNumber: number;
  expression: string;
  isCorrect: boolean;
  feedback: string;
  explanation?: string;
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

export interface Chapter {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  timestamp?: number; // For video content
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

export interface StudyMaterial {
  id: string;
  userId: string;
  title: string;
  type: 'youtube' | 'pdf' | 'text';
  url?: string;
  content: string;
  summary: string;
  chapters: Chapter[];
  flashcards: Flashcard[];
  quizzes: Quiz[];
  createdAt: Date;
}

export interface ConversationMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  attachments?: string[];
}

export interface TutorSession {
  id: string;
  userId: string;
  subject: string;
  messages: ConversationMessage[];
  learningObjectives: string[];
  progress: number;
  createdAt: Date;
}

export interface HomeworkItem {
  id: string;
  question: string;
  imageUrl?: string;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  solution: string;
  steps: string[];
  feedback: string;
}

export interface HomeworkSubmission {
  id: string;
  userId: string;
  items: HomeworkItem[];
  score: number;
  feedback: string[];
  createdAt: Date;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  prerequisites: string[];
  estimatedDuration: number; // in hours
  modules: LearningModule[];
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'reading' | 'exercise' | 'quiz';
  content: string;
  isCompleted: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface StudyRoadmap {
  id: string;
  userId: string;
  subject: string;
  currentLevel: 'beginner' | 'intermediate' | 'advanced';
  targetLevel: 'beginner' | 'intermediate' | 'advanced';
  paths: LearningPath[];
  progress: {
    completedModules: number;
    totalModules: number;
    estimatedCompletion: Date;
  };
  createdAt: Date;
}

export interface SoftwareStep {
  id: string;
  stepNumber: number;
  description: string;
  expectedAction: string;
  userAction?: string;
  isCorrect: boolean;
  screenshot?: string;
  feedback: string;
}

export interface SoftwareTutorial {
  id: string;
  userId: string;
  software: string;
  task: string;
  steps: SoftwareStep[];
  isCompleted: boolean;
  score: number;
  timeSpent: number; // in seconds
  createdAt: Date;
}

export interface Drawing {
  id: string;
  type: 'diagram' | 'graph' | 'formula' | 'illustration';
  data: string; // SVG or canvas data
  description: string;
  timestamp: Date;
}

export interface VoiceResponse {
  id: string;
  text: string;
  audioUrl?: string;
  requiresDrawing: boolean;
  drawingData?: any;
  timestamp: Date;
}

export interface VoiceSession {
  id: string;
  userId: string;
  transcript: string;
  drawings: Drawing[];
  responses: VoiceResponse[];
  language: string;
  createdAt: Date;
}

export interface MentorSession {
  id: string;
  studentId: string;
  mentorId: string;
  subject: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  scheduledTime: Date;
  duration: number; // in minutes
  notes: string;
  feedback: {
    strengths: string[];
    improvements: string[];
    nextSteps: string[];
  };
  meetingUrl?: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: Date;
}
