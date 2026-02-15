import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-apple-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[120px] md:text-[180px] font-bold text-apple-gray-100 leading-none select-none">
          404
        </h1>
        <h2 className="text-subtitle-sm md:text-subtitle font-semibold text-apple-gray-800 -mt-6 mb-4">
          Page not found
        </h2>
        <p className="text-body-lg text-apple-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-apple btn-apple-primary inline-flex items-center gap-2"
        >
          <Icon name="ArrowLeft" size={18} />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;