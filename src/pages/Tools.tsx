import React from 'react';
import QuoteCalculator from '../components/QuoteCalculator';
import ClaimTracker from '../components/ClaimTracker';
import { Calculator, Search, MessageCircle } from 'lucide-react';
import useChatbot from 'C:/Users/arvin/Downloads/project-bolt-sb1-dwfeatdb/project/useChatbot.ts'; 

const Tools: React.FC = () => {
    // This is your chatbot script as a string
    const voiceflowScript = `
        (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '68b7267976151a3f86e58353' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                voice: {
                  url: "https://runtime-api.voiceflow.com"
                }
              });
            }
            v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
        })(document, 'script');
    `;

    // The custom hook injects the script into the page when this component loads
    useChatbot(voiceflowScript);

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Tools & Services</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Access our suite of digital tools designed to make insurance simple and convenient.
                    </p>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Quote Calculator */}
                        <div className="space-y-6">
                            <div className="text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                                    <Calculator className="h-8 w-8 text-blue-700" />
                                    <h2 className="text-3xl font-bold text-gray-900">Premium Calculator</h2>
                                </div>
                                <p className="text-gray-600 text-lg">
                                    Get instant premium estimates for any insurance product. 
                                    Simply enter your details and see personalized quotes in seconds.
                                </p>
                            </div>
                            <QuoteCalculator />
                        </div>

                        {/* Claim Tracker */}
                        <div className="space-y-6">
                            <div className="text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                                    <Search className="h-8 w-8 text-green-700" />
                                    <h2 className="text-3xl font-bold text-gray-900">Claim Tracker</h2>
                                </div>
                                <p className="text-gray-600 text-lg">
                                    Track your claim status in real-time. Enter your claim ID to get 
                                    up-to-date information about your claim processing.
                                </p>
                            </div>
                            <ClaimTracker />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chatbot Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <MessageCircle className="h-12 w-12 text-blue-700" />
                            <h2 className="text-3xl font-bold text-gray-900">AI Assistant</h2>
                        </div>
                        
                        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                            Have questions about our insurance products? Our AI-powered chatbot is available 
                            24/7 to help you find the right coverage and answer common queries.
                        </p>
                        
                        {/* The chatbot itself will appear as a floating icon on the page, not inside this box. */}

                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Additional Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Beyond insurance, we offer value-added services to enhance your experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Policy Renewal',
                                description: 'Easy online renewal with instant confirmation and updated policy documents.',
                                icon: '🔄'
                            },
                            {
                                title: 'Health Check-ups',
                                description: 'Free annual health check-ups at empaneled hospitals nationwide.',
                                icon: '🏥'
                            },
                            {
                                title: 'Financial Planning',
                                description: 'Expert advice on financial planning and investment options.',
                                icon: '📊'
                            },
                            {
                                title: 'Emergency Assistance',
                                description: '24/7 emergency helpline for immediate support and guidance.',
                                icon: '🚨'
                            },
                            {
                                title: 'Document Vault',
                                description: 'Secure digital storage for all your insurance documents.',
                                icon: '🔐'
                            },
                            {
                                title: 'Wellness Programs',
                                description: 'Access to fitness programs, health tips, and preventive care.',
                                icon: '💪'
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tools;