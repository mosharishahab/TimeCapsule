import React from 'react';
import { ArrowLeft, ArrowRight, Bell, Calendar, Camera, ClipboardList, Gift, Globe, Key, Lock, Map, Mic, Play, Plus, Search, Settings, Share2, Shield, Upload, Users } from 'lucide-react';

function TimeCapsuleApp({ onNavigate }) {
  return (
    <div className="container mx-auto max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">کپسول زمان شهاب</h1>
        <p className="text-gray-600">خاطرات خود را برای آینده ذخیره کنید</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <button
          onClick={() => onNavigate('create')}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg flex items-center justify-between"
        >
          <span className="flex items-center">
            <Plus className="w-6 h-6 ml-2" />
            ساخت کپسول زمان جدید
          </span>
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => onNavigate('open')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg flex items-center justify-between"
        >
          <span className="flex items-center">
            <Lock className="w-6 h-6 ml-2" />
            باز کردن کپسول زمان
          </span>
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">امکانات کپسول زمان</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Camera, text: 'عکس و ویدیو' },
            { icon: Mic, text: 'صدا و موسیقی' },
            { icon: ClipboardList, text: 'متن و یادداشت' },
            { icon: Calendar, text: 'تاریخ بازگشایی' },
            { icon: Shield, text: 'رمزنگاری پیشرفته' },
            { icon: Share2, text: 'اشتراک‌گذاری' },
            { icon: Map, text: 'موقعیت مکانی' },
            { icon: Users, text: 'چند کاربره' }
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <Icon className="w-5 h-5 text-blue-500 ml-2" />
              <span className="text-gray-600 text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimeCapsuleApp;