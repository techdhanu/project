import React from 'react';
import { X } from 'lucide-react';
import { Course } from '../types';

interface VideoModalProps {
  course: Course;
  onClose: () => void;
}

export function VideoModal({ course, onClose }: VideoModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="relative pt-[56.25%]">
          <iframe
            src={course.videoUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}