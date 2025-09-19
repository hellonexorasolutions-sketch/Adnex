import React from 'react';
import Icon from '../../../components/AppIcon';

const AdBanner = ({ position = 'top' }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center justify-center w-12 h-12 bg-slate-200 rounded-full">
            <Icon name="Megaphone" size={24} color="var(--color-text-secondary)" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-text-secondary">
              Advertisement Space
            </h3>
            <p className="text-sm text-text-secondary opacity-75">
              {position === 'top' ? 'Sponsored Content Area' : 'Partner Promotion Zone'}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs text-text-secondary opacity-50">
            <span>728 x 90</span>
            <span>•</span>
            <span>Responsive Banner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;