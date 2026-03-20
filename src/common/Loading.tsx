import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-default">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary-500/10 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
