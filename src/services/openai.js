import OpenAI from 'openai';

/**
 * Initializes the OpenAI client with the API key from environment variables.
 */
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Required for client-side usage in React
});

/**
 * Generates ad content using OpenAI's GPT-4o-mini model for a given business description.
 * @param {string} businessDescription - The business description provided by the user.
 * @returns {Promise<Object>} Generated ad content with bio, Facebook ad, WhatsApp status, and taglines.
 */
export async function generateAdContent(businessDescription) {
  try {
    const response = await openai?.chat?.completions?.create({
      model: 'gpt-4o-mini', // Updated to use correct model name
      messages: [
        {
          role: 'system',
          content: `You are an expert marketing copywriter who creates engaging ad content. Based on the business description, generate professional marketing content that includes:
          1. A compelling business bio (2-3 sentences)
          2. A Facebook/Instagram ad copy with emojis and call-to-action
          3. A concise WhatsApp status message
          4. 5 catchy taglines with emojis
          
          Keep the tone professional yet engaging, and include relevant emojis. Focus on benefits and unique selling points.`
        },
        {
          role: 'user',
          content: `Create marketing content for this business: ${businessDescription}`
        }
      ],
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: 'ad_content_response',
          schema: {
            type: 'object',
            properties: {
              businessBio: {
                type: 'string',
                description: 'Professional business bio (2-3 sentences with emojis)'
              },
              facebookAd: {
                type: 'string',
                description: 'Complete Facebook/Instagram ad copy with formatting, emojis, and call-to-action'
              },
              whatsappStatus: {
                type: 'string',
                description: 'Concise WhatsApp status message with emojis'
              },
              taglines: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of 5 catchy taglines with emojis',
                minItems: 5,
                maxItems: 5
              }
            },
            required: ['businessBio', 'facebookAd', 'whatsappStatus', 'taglines'],
            additionalProperties: false
          }
        }
      },
      temperature: 0.7,
      max_tokens: 2000
    });

    return JSON.parse(response?.choices?.[0]?.message?.content);
  } catch (error) {
    console.error('Error generating ad content with OpenAI:', error);
    
    // Enhanced error handling with specific error types
    if (error?.status === 429) {
      throw new Error('API_QUOTA_EXCEEDED');
    } else if (error?.status === 401) {
      throw new Error('API_KEY_INVALID');
    } else if (error?.status >= 500) {
      throw new Error('API_SERVER_ERROR');
    } else if (!navigator.onLine) {
      throw new Error('NETWORK_ERROR');
    } else {
      throw new Error('API_UNKNOWN_ERROR');
    }
  }
}

/**
 * Fallback function to generate mock content if OpenAI API fails.
 * @param {string} businessDescription - The business description.
 * @returns {Object} Mock ad content.
 */
export function generateFallbackContent(businessDescription) {
  const businessType = businessDescription?.toLowerCase();
  
  if (businessType?.includes('cake') || businessType?.includes('bakery')) {
    return {
      businessBio: `🍰 Welcome to our artisanal bakery! We specialize in creating delicious, freshly baked homemade cakes using the finest ingredients. Every cake is handcrafted with care, ensuring exceptional taste and beautiful presentation that will make your celebrations unforgettable.`,
      facebookAd: `🎂 Craving something sweet? Our homemade cakes are baked fresh daily with premium ingredients!\n\n✨ What makes us special:\n• Custom designs for any occasion\n• Fresh, natural ingredients only\n• Same-day delivery available\n• Affordable prices starting from ₹299\n\n🎉 Perfect for birthdays, anniversaries, and celebrations!\n\nOrder now and taste the difference! 📞 Call us today.\n\n#HomemadeCakes #FreshBaked #CustomCakes`,
      whatsappStatus: `🍰 Fresh homemade cakes daily! Custom designs, premium ingredients, same-day delivery. Starting ₹299. Order now! 📞`,
      taglines: [
        "Sweet Moments, Sweeter Cakes! 🍰",
        "Baked Fresh, Made with Love ❤️",
        "Your Celebration, Our Creation! 🎂",
        "Taste the Homemade Difference! ✨",
        "From Our Kitchen to Your Heart 💕"
      ]
    };
  } else if (businessType?.includes('restaurant') || businessType?.includes('food')) {
    return {
      businessBio: `🍽️ Experience authentic flavors at our restaurant! We serve traditional and contemporary dishes prepared with fresh, locally-sourced ingredients, creating memorable dining experiences with exceptional service.`,
      facebookAd: `🍽️ Hungry for authentic flavors? Join us for an unforgettable dining experience!\n\n✨ Why choose us:\n• Fresh, locally-sourced ingredients\n• Traditional & contemporary dishes\n• Warm, family-friendly atmosphere\n• Excellent service every time\n\n🎉 Perfect for dates, family dinners, and celebrations!\n\nBook your table today! 📞 Call now.\n\n#AuthenticFood #FreshIngredients #FamilyDining`,
      whatsappStatus: `🍽️ Authentic flavors, fresh ingredients, warm atmosphere! Perfect for family dining. Book your table today! 📞`,
      taglines: [
        "Taste the Authentic Difference! 🍽️",
        "Where Flavor Meets Tradition ✨",
        "Fresh Ingredients, Unforgettable Taste! 🌿",
        "Your Table is Waiting! 🪑",
        "Food That Brings People Together ❤️"
      ]
    };
  } else {
    return {
      businessBio: `🚀 Welcome to our business! We're passionate about providing exceptional products and services that make a real difference in our customers' lives, combining quality, affordability, and outstanding customer service.`,
      facebookAd: `🌟 Looking for quality products and exceptional service? You've found the right place!\n\n✨ What sets us apart:\n• Premium quality at affordable prices\n• Outstanding customer service\n• Fast and reliable delivery\n• 100% satisfaction guarantee\n\n🎯 Perfect for all your needs!\n\nContact us today! 📞 Call now.\n\n#QualityService #CustomerFirst #AffordablePrices`,
      whatsappStatus: `🌟 Premium quality, exceptional service, affordable prices! Your satisfaction is our priority. Contact us today! 📞`,
      taglines: [
        "Quality You Can Trust! 🌟",
        "Excellence in Every Detail ✨",
        "Your Success, Our Mission! 🎯",
        "Where Quality Meets Affordability 💎",
        "Service Beyond Expectations! 🚀"
      ]
    };
  }
}

export default openai;