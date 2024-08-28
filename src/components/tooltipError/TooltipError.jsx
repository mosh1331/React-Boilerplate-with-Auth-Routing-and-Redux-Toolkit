import React from 'react';

const TooltipError = ({ message }) => {
  return (
    <div className="relative group">
      <div className="absolute left-0 mt-1 p-2 bg-red-500 text-white text-xs rounded-md shadow-lg">
        {message}
      </div>
    </div>
  );
};

export default TooltipError;
