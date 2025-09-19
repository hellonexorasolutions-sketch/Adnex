import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import ResultsSection from './components/ResultsSection';
import FeatureSection from './components/FeatureSection';
import { generateAdContent, generateFallbackContent } from '../../services/openai';

const AIAdGeneratorHome = () => {
  const [businessDescription, setBusinessDescription] = useState('');
  const [results, setResults] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const getErrorMessage = (errorType) => {
    switch (errorType) {
      case 'API_QUOTA_EXCEEDED':
        return {
          title: 'API Quota Exceeded',
          message: 'Your OpenAI API quota has been exceeded. Please check your OpenAI billing details and upgrade your plan if needed.',
          showFallback: true
        };
      case 'API_KEY_INVALID':
        return {
          title: 'Invalid API Key',
          message: 'Your OpenAI API key is invalid. Please check your environment configuration.',
          showFallback: false
        };
      case 'API_SERVER_ERROR':
        return {
          title: 'Server Error',
          message: 'OpenAI servers are currently experiencing issues. Please try again later.',
          showFallback: true
        };
      case 'NETWORK_ERROR':
        return {
          title: 'Network Error',
          message: 'Please check your internet connection and try again.',
          showFallback: false
        };
      default:
        return {
          title: 'Unexpected Error',
          message: 'An unexpected error occurred. Please try again.',
          showFallback: true
        };
    }
  };

  const handleGenerate = async () => {
    if (!businessDescription?.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      // Generate content using OpenAI API
      const generatedResults = await generateAdContent(businessDescription?.trim());
      setResults(generatedResults);
    } catch (err) {
      console.error('Error generating content:', err);
      
      const errorInfo = getErrorMessage(err?.message);
      
      if (errorInfo?.showFallback) {
        // Use fallback content for quota/server errors
        const fallbackResults = generateFallbackContent(businessDescription?.trim());
        setResults(fallbackResults);
        setError({
          ...errorInfo,
          type: 'warning',
          message: `${errorInfo?.message} We've generated sample content using your business description instead.`
        });
      } else {
        // Show error without fallback for authentication/network issues
        setError({
          ...errorInfo,
          type: 'error'
        });
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateAgain = () => {
    setResults(null);
    setBusinessDescription('');
    setError(null);
  };

  const handleCopyAll = async () => {
    if (!results) return;
    
    const allContent = `BUSINESS BIO:\n${results?.businessBio}\n\nFACEBOOK/INSTAGRAM AD:\n${results?.facebookAd}\n\nWHATSAPP STATUS:\n${results?.whatsappStatus}\n\nCATCHY TAGLINES:\n${results?.taglines?.join('\n')}`;
    
    try {
      await navigator.clipboard?.writeText(allContent);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy all content: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full">
        <HeroSection
          businessDescription={businessDescription}
          setBusinessDescription={setBusinessDescription}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
          error={error}
        />
        
        {!results && !isGenerating && <FeatureSection />}
        
        <ResultsSection
          results={results}
          onGenerateAgain={handleGenerateAgain}
          onCopyAll={handleCopyAll}
          isGenerating={isGenerating}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAdGeneratorHome;