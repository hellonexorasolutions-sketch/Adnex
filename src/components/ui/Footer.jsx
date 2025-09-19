import React from 'react';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <footer className="w-full bg-surface border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <svg
                className="w-5 h-5 text-primary-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground">AdNex</span>
              <span className="text-xs text-text-secondary">
                © {currentYear} AdNex. All rights reserved.
              </span>
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            {footerLinks?.map((link, index) => (
              <a
                key={index}
                href={link?.href}
                className="text-sm text-text-secondary hover:text-primary transition-micro focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-1 py-1"
              >
                {link?.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="text-xs text-text-secondary text-center sm:text-left">
              Empowering small businesses with AI-powered marketing solutions.
            </p>
            <div className="flex items-center space-x-4 text-xs text-text-secondary">
              <span className="inline-flex items-center space-x-1">
                <span>🚀</span>
                <span>Built for Growth</span>
              </span>
              <span className="inline-flex items-center space-x-1">
                <span>⚡</span>
                <span>Instant Results</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;