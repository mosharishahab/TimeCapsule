import React from 'react';
import { ArrowRight } from 'lucide-react';

function CreateCapsuleScreen({ onBack }) {
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">ساخت کپسول زمان جدید</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">عنوان کپسول</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="عنوان کپسول زمان خود را وارد کنید"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">پیام</label>
            <textarea
              className="w-full p-2 border rounded-md h-32"
              placeholder="پیام خود را برای آینده بنویسید"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">تاریخ بازگشایی</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            ذخیره کپسول زمان
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCapsuleScreen;