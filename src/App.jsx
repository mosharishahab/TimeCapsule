import React, { useState } from 'react';
import TimeCapsuleApp from './components/TimeCapsuleApp';
import CreateCapsuleScreen from './components/CreateCapsuleScreen';
import OpenCapsuleScreen from './components/OpenCapsuleScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('main');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'main':
        return <TimeCapsuleApp onNavigate={setCurrentScreen} />;
      case 'create':
        return <CreateCapsuleScreen onBack={() => setCurrentScreen('main')} />;
      case 'open':
        return <OpenCapsuleScreen onBack={() => setCurrentScreen('main')} />;
      default:
        return <TimeCapsuleApp onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      {renderScreen()}
    </div>
  );
}

export default App;