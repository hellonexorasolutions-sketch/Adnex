import React, { useState } from 'react';

import Button from '../../../components/ui/Button';

const ResultCard = ({ title, content, emoji, type }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard?.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getCardStyles = () => {
    switch (type) {
      case 'bio':
        return 'border-l-4 border-l-blue-500 bg-blue-50/50';
      case 'facebook':
        return 'border-l-4 border-l-purple-500 bg-purple-50/50';
      case 'whatsapp':
        return 'border-l-4 border-l-green-500 bg-green-50/50';
      case 'taglines':
        return 'border-l-4 border-l-orange-500 bg-orange-50/50';
      default:
        return 'border-l-4 border-l-primary bg-surface';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-soft p-6 ${getCardStyles()} transition-all duration-200 hover:shadow-modal`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{emoji}</span>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          iconName={copied ? "Check" : "Copy"}
          iconSize={16}
          className="text-text-secondary hover:text-primary"
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <div className="space-y-3">
        {Array.isArray(content) ? (
          content?.map((item, index) => (
            <div key={index} className="p-3 bg-white rounded-lg border border-border">
              <p className="text-foreground leading-relaxed">{item}</p>
            </div>
          ))
        ) : (
          <div className="p-4 bg-white rounded-lg border border-border">
            <p className="text-foreground leading-relaxed whitespace-pre-line">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;