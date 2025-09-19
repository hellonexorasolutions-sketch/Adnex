import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">AdNex</h1>
              <p className="text-xs text-text-secondary hidden sm:block">
                AI-Powered Marketing Tools
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-text-secondary">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-success/10 text-success font-medium">
                ✨ AI Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;