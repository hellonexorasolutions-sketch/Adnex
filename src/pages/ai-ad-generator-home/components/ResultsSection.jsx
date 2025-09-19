import React from 'react';
import Button from '../../../components/ui/Button';
import ResultCard from './ResultCard';
import AdBanner from './AdBanner';

const ResultsSection = ({ results, onGenerateAgain, onCopyAll, isGenerating }) => {
  if (!results) return null;

  const resultCards = [
    {
      title: 'Business Bio',
      content: results?.businessBio,
      emoji: '📝',
      type: 'bio'
    },
    {
      title: 'Facebook/Instagram Ad Copy',
      content: results?.facebookAd,
      emoji: '📱',
      type: 'facebook'
    },
    {
      title: 'WhatsApp Status Line',
      content: results?.whatsappStatus,
      emoji: '💬',
      type: 'whatsapp'
    },
    {
      title: 'Catchy Taglines',
      content: results?.taglines,
      emoji: '✨',
      type: 'taglines'
    }
  ];

  return (
    <section className="w-full py-12 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Your AI-Generated Ad Content
          </h2>
          <p className="text-text-secondary">
            Professional marketing copy ready to use across all platforms
          </p>
        </div>

        <div className="space-y-6">
          {resultCards?.map((card, index) => (
            <React.Fragment key={index}>
              <ResultCard {...card} />
              {index === 1 && <AdBanner position="middle" />}
            </React.Fragment>
          ))}
        </div>

        <AdBanner position="bottom" />

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={onGenerateAgain}
            disabled={isGenerating}
            iconName="RefreshCw"
            iconPosition="left"
            className="px-6 py-3 font-semibold"
          >
            Generate Again
          </Button>
          <Button
            variant="default"
            size="lg"
            onClick={onCopyAll}
            iconName="Clipboard"
            iconPosition="left"
            className="px-6 py-3 font-semibold"
          >
            Copy All Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;