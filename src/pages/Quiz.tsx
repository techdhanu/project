import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { generateQuestions } from '../utils/aiUtils';
import type { Quiz } from '../types';

export function QuizPage() {
  const [subject, setSubject] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [questionCount, setQuestionCount] = useState(5);
  const [questions, setQuestions] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(false);

  const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'History',
    'Geography'
  ];

  const classes = ['9', '10', '11', '12'];

  const handleGenerateQuiz = async () => {
    if (!subject || !selectedClass) {
      alert('Please select both subject and class');
      return;
    }

    setLoading(true);
    try {
      const generatedQuestions = await generateQuestions(selectedClass, subject, questionCount);
      setQuestions(generatedQuestions);
    } catch (error) {
      console.error('Failed to generate questions:', error);
    }
    setLoading(false);
  };

  const handleDownload = () => {
    const content = questions.map((q, i) => `
Question ${i + 1}: ${q.question}
Options:
${q.options.map((opt, j) => `${String.fromCharCode(65 + j)}. ${opt}`).join('\n')}
Correct Answer: ${q.correctAnswer}
`).join('\n\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${subject}-class${selectedClass}-quiz.txt`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Quiz Generator</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Subject</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Questions
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={questionCount}
              onChange={(e) => setQuestionCount(parseInt(e.target.value))}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        <button
          onClick={handleGenerateQuiz}
          disabled={loading || !subject || !selectedClass}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400"
        >
          {loading ? 'Generating...' : 'Generate Quiz'}
        </button>
      </div>

      {questions.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Generated Questions</h2>
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Download Quiz
            </button>
          </div>
          
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={question.id} className="border-b pb-4">
                <p className="font-medium mb-2">
                  {index + 1}. {question.question}
                </p>
                <div className="ml-4 space-y-1">
                  {question.options.map((option, optIndex) => (
                    <p key={optIndex}>
                      {String.fromCharCode(65 + optIndex)}. {option}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}