import { create } from 'zustand';
import { AuthState, User } from '../types';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (email: string, password: string) => {
    // In a real app, this would make an API call
    set({
      user: {
        id: '1',
        email,
        name: 'Demo User',
        dateOfBirth: '1990-01-01',
        interests: ['Mathematics', 'Physics'],
      },
    });
  },
  signup: (email: string, password: string, name: string, dateOfBirth: string) => {
    // In a real app, this would make an API call
    set({
      user: {
        id: Date.now().toString(),
        email,
        name,
        dateOfBirth,
        interests: [],
      },
    });
  },
  logout: () => set({ user: null }),
}));