import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Car, Home, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';

const Products: React.FC = () => {
  // Removed unused useDarkMode variables
  const { isDarkMode: _isDarkMode, toggleDarkMode: _toggleDarkMode } = useDarkMode();
  const [activeCategory, setActiveCategory] = useState('health');

  const categories = [
    { id: 'health', name: 'Health Insurance', icon: <Heart className="h-6 w-6" /> },
    { id: 'life', name: 'Life Insurance', icon: <Shield className="h-6 w-6" /> },
    { id: 'auto', name: 'Auto Insurance', icon: <Car className="h-6 w-6" /> },
    { id: 'home', name: 'Home Insurance', icon: <Home className="h-6 w-6" /> },
    { id: 'business', name: 'Business Insurance', icon: <Briefcase className="h-6 w-6" /> }
  ];

  const productDetails = {
    health: {
      title: 'Health Insurance Plans',
      description: 'Comprehensive medical coverage for individuals and families',
      plans: [
        {
          name: 'Individual Health Plan',
          coverage: '₹5 - 50 Lakhs',
          features: ['Cashless treatment', 'Pre/Post hospitalization', 'Day care procedures', 'Annual health check-up'],
          startingPrice: '₹3,500/year'
        },
        {
          name: 'Family Floater Plan',
          coverage: '₹10 - 75 Lakhs',
          features: ['Coverage for entire family', 'Maternity benefits', 'Child vaccination', 'Emergency ambulance'],
          startingPrice: '₹8,500/year'
        },
        {
          name: 'Senior Citizen Plan',
          coverage: '₹3 - 25 Lakhs',
          features: ['No upper age limit', 'Pre-existing conditions covered', 'Domiciliary treatment', 'AYUSH treatments'],
          startingPrice: '₹6,500/year'
        }
      ]
    },
    life: {
      title: 'Life Insurance Plans',
      description: 'Financial security for your loved ones',
      plans: [
        {
          name: 'Term Life Plan',
          coverage: '₹25 Lakhs - 10 Crores',
          features: ['Pure protection', 'Affordable premiums', 'Tax benefits', 'Flexible payment options'],
          startingPrice: '₹500/month'
        },
        {
          name: 'Whole Life Plan',
          coverage: '₹10 Lakhs - 2 Crores',
          features: ['Lifelong protection', 'Guaranteed returns', 'Loan facility', 'Maturity benefits'],
          startingPrice: '₹2,500/month'
        },
        {
          name: 'Child Future Plan',
          coverage: '₹5 - 50 Lakhs',
          features: ['Education funding', 'Marriage planning', 'Waiver of premium', 'Guaranteed payouts'],
          startingPrice: '₹1,200/month'
        }
      ]
    },
    auto: {
      title: 'Auto Insurance Plans',
      description: 'Complete protection for your vehicles',
      plans: [
        {
          name: 'Car Insurance',
          coverage: 'Comprehensive',
          features: ['Own damage cover', 'Third party liability', 'Personal accident', 'Roadside assistance'],
          startingPrice: '₹2,500/year'
        },
        {
          name: 'Two Wheeler Insurance',
          coverage: 'Comprehensive',
          features: ['Theft protection', 'Natural disaster cover', 'Personal accident', 'Zero depreciation'],
          startingPrice: '₹800/year'
        },
        {
          name: 'Commercial Vehicle',
          coverage: 'Comprehensive',
          features: ['Goods in transit', 'Driver protection', 'Breakdown assistance', 'Legal liability'],
          startingPrice: '₹5,500/year'
        }
      ]
    },
    home: {
      title: 'Home Insurance Plans',
      description: 'Protect your home and belongings',
      plans: [
        {
          name: 'Home Structure Plan',
          coverage: '₹10 - 75 Lakhs',
          features: ['Natural disaster cover', 'Fire protection', 'Earthquake coverage', 'Architect fees'],
          startingPrice: '₹1,500/year'
        },
        {
          name: 'Home Contents Plan',
          coverage: '₹2 - 25 Lakhs',
          features: ['Furniture & electronics', 'Theft protection', 'Accidental damage', 'Temporary accommodation'],
          startingPrice: '₹1,200/year'
        },
        {
          name: 'Comprehensive Home Plan',
          coverage: '₹15 - 1 Crore',
          features: ['Complete home protection', 'Personal liability', 'Rent loss cover', 'Emergency expenses'],
          startingPrice: '₹2,800/year'
        }
      ]
    },
    business: {
      title: 'Business Insurance Plans',
      description: 'Comprehensive coverage for businesses of all sizes',
      plans: [
        {
          name: 'SME Business Package',
          coverage: '₹10 - 50 Lakhs',
          features: ['Property insurance', 'Liability cover', 'Business interruption', 'Employee compensation'],
          startingPrice: '₹8,500/year'
        },
        {
          name: 'Professional Indemnity',
          coverage: '₹5 - 25 Lakhs',
          features: ['Professional liability', 'Legal defense costs', 'Error & omission', 'Retroactive coverage'],
          startingPrice: '₹5,200/year'
        },
        {
          name: 'Group Health Insurance',
          coverage: '₹2 - 10 Lakhs per employee',
          features: ['Employee health cover', 'Family coverage', 'Cashless treatment', 'Wellness programs'],
          startingPrice: '₹3,500/employee/year'
        }
      ]
    }
  };

  const activeProducts = productDetails[activeCategory as keyof typeof productDetails];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-200 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-950 dark:to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Products</h1>
          <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
            Choose from our comprehensive range of insurance products designed to protect every aspect of your life.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-700'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {activeProducts.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {activeProducts.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProducts.plans.map((plan, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{plan.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">Coverage: {plan.coverage}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t dark:border-gray-600 pt-6">
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Starting from</p>
                      <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">{plan.startingPrice}</p>
                    </div>
                    
                    <Link
                      to="/tools"
                      className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Common questions about our insurance products and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What documents are required for policy purchase?",
                a: "You'll need identity proof (Aadhaar/PAN), address proof, age proof, and income proof for most policies. Specific requirements vary by product type."
              },
              {
                q: "How quickly are claims processed?",
                a: "Most claims are processed within 7-15 working days. Emergency claims and cashless treatments are approved much faster, often within 24-48 hours."
              },
              {
                q: "Can I modify my policy after purchase?",
                a: "Yes, you can make certain modifications like increasing coverage, adding riders, or updating personal details. Some changes may require additional premium."
              },
              {
                q: "What is the process for claim settlement?",
                a: "Simply call our 24/7 helpline, submit required documents, and our team will guide you through the entire process. Most claims are settled directly with hospitals/service providers."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
