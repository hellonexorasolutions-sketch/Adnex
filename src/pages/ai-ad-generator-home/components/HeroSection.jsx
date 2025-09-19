import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const HeroSection = ({ businessDescription, setBusinessDescription, onGenerate, isGenerating, error }) => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Write Ads in Seconds.{' '}
            <span className="text-primary">AI-Powered.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Transform your business description into professional ad copy for WhatsApp, Facebook, and Instagram. 
            Powered by advanced AI. Get instant, personalized results.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="e.g. I sell homemade cakes in Bangalore"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e?.target?.value)}
              className="text-center text-lg py-4 px-6 rounded-xl border-2 border-border focus:border-primary transition-all duration-200"
              disabled={isGenerating}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon name="Sparkles" size={20} color="var(--color-primary)" />
            </div>
          </div>

          {error && (
            <div className={`${
              error?.type === 'warning' ?'bg-yellow-50 border border-yellow-200 text-yellow-800' :'bg-red-50 border border-red-200 text-red-700'
            } px-4 py-3 rounded-xl`}>
              <div className="flex items-start space-x-2">
                <Icon 
                  name={error?.type === 'warning' ? 'AlertTriangle' : 'AlertCircle'} 
                  size={16} 
                  className="flex-shrink-0 mt-0.5" 
                />
                <div className="text-sm">
                  <p className="font-semibold mb-1">{error?.title}</p>
                  <p>{error?.message}</p>
                  {error?.type === 'warning' && (
                    <p className="mt-2 text-xs opacity-75">
                      💡 Tip: The sample content below is still valuable for your marketing needs!
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <Button
            variant="default"
            size="lg"
            onClick={onGenerate}
            disabled={!businessDescription?.trim() || isGenerating}
            loading={isGenerating}
            iconName="Sparkles"
            iconPosition="left"
            className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            fullWidth
          >
            {isGenerating ? 'AI is Generating...' : 'Generate AI Ads'}
          </Button>

          <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={16} color="var(--color-success)" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} color="var(--color-success)" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} color="var(--color-success)" />
              <span>No Signup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;