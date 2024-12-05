export interface User {
  id: string;
  email: string;
  name: string;
  dateOfBirth: string;
  interests: string[];
}

export interface Course {
  id: string;
  title: string;
  subject: string;
  class: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  topics: string[];
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  subject: string;
  topic: string;
}

export interface AuthState {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, name: string, dateOfBirth: string) => void;
  logout: () => void;
}