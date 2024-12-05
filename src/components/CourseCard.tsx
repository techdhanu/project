import React from 'react';
import { Play } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(course)}
    >
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{course.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-indigo-600">
            Class {course.class} • {course.subject}
          </span>
          <Play className="h-5 w-5 text-indigo-600" />
        </div>
      </div>
    </div>
  );
}