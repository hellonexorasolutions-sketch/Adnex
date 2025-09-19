import React from 'react';
import Icon from '../../../components/AppIcon';

const FeatureSection = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'Instant Generation',
      description: 'Get professional ad copy in seconds, not hours. Our AI works faster than any copywriter.'
    },
    {
      icon: 'Target',
      title: 'Multi-Platform Ready',
      description: 'Content optimized for WhatsApp, Facebook, Instagram, and more social media platforms.'
    },
    {
      icon: 'Sparkles',
      title: 'AI-Powered Quality',
      description: 'Advanced AI ensures your ads are engaging, professional, and conversion-focused.'
    },
    {
      icon: 'Users',
      title: 'Small Business Focused',
      description: 'Designed specifically for local businesses, startups, and entrepreneurs like you.'
    },
    {
      icon: 'Shield',
      title: 'Completely Free',
      description: 'No hidden costs, no subscriptions, no signup required. Just free, quality ad content.'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Optimized',
      description: 'Works perfectly on all devices. Generate ads on-the-go from your smartphone.'
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose AdNex?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need to create professional marketing content for your small business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 text-center hover:shadow-soft transition-all duration-200 border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4">
                <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature?.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;