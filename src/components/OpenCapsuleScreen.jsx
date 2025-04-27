import React from 'react';
import { ArrowRight } from 'lucide-react';

function OpenCapsuleScreen({ onBack }) {
  return (
    <div className="container mx-auto max-w-2xl">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-700"
      >
        <ArrowRight className="w-5 h-5 ml-1" />
        بازگشت
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">باز کردن کپسول زمان</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">کد کپسول</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="