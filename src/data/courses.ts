import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Mathematics',
    subject: 'Mathematics',
    class: '10',
    description: 'Fundamental concepts of algebra and geometry',
    videoUrl: 'https://www.youtube.com/embed/NybHckSEQBI',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    topics: ['algebra', 'geometry'],
  },
  {
    id: '2',
    title: 'Basic Physics',
    subject: 'Physics',
    class: '10',
    description: 'Understanding motion and forces',
    videoUrl: 'https://www.youtube.com/embed/ZM8ECpBuQYE',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa',
    topics: ['mechanics', 'forces'],
  },
  {
    id: '3',
    title: 'Chemistry Fundamentals',
    subject: 'Chemistry',
    class: '10',
    description: 'Basic concepts of atoms and molecules',
    videoUrl: 'https://www.youtube.com/embed/bka20Q9TN6M',
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6',
    topics: ['atoms', 'molecules'],
  },
];