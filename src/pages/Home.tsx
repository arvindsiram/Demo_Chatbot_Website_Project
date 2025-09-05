import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import QuoteCalculator from './components/QuoteCalculator';
import { Heart, Car, Home as HomeIcon, Briefcase, Award, Users, Clock } from 'lucide-react';
import { useDarkMode } from '../DarkModeContext';

const Home: React.FC = () => {
  // Removed unused useDarkMode variables
const { isDarkMode: _isDarkMode, toggleDarkMode: _toggleDarkMode } = useDarkMode();
  const features = [
    {
      icon: <Clock className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Instant Claims",
      description: "Quick and hassle-free claim settlement process with 99% approval rate."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Expert Support",
      description: "Dedicated relationship managers available 24/7 for personalized assistance."
    },
    {
      icon: <Award className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />,
      title: "Award Winning",
      description: "Recognized as the most trusted insurance provider for 3 consecutive years."
    }
  ];

  const products = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
      link: "/products" // Link to the main products page
    },
    {
      icon: <Car className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
      title: "Auto Insurance",
      description: "Complete protection for your vehicle with roadside assistance",
      link: "/products"
    },
    {
      icon: <HomeIcon className="h-8 w-8 text-green-500 dark:text-green-400" />,
      title: "Home Insurance",
      description: "Secure your home and belongings against unexpected events",
      link: "/products"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
      title: "Business Insurance",
      description: "Protect your business with comprehensive commercial coverage",
      link: "/products"
    }
  ];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-200 min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose SafeGuard?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're committed to providing exceptional insurance solutions with unmatched customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Insurance Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive coverage options designed to protect what matters most to you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-200 hover:shadow-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
              >
                <div className="mb-4">
                  {product.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-blue-900 dark:bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Quote Instantly
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
              Calculate your premium in seconds with our smart quote calculator.
            </p>
          </div>
          
          <QuoteCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Business Owner",
                content: "SafeGuard's business insurance helped me protect my startup. Their support team is incredibly responsive.",
                rating: 5
              },
              {
                name: "Rajesh Kumar",
                role: "Family Man",
                content: "When my car was damaged in an accident, SafeGuard settled my claim within 48 hours. Truly reliable!",
                rating: 5
              },
              {
                name: "Dr. Anita Patel",
                role: "Healthcare Professional",
                content: "Their health insurance covered my family's medical expenses completely. Peace of mind guaranteed.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <div className="flex text-yellow-400 dark:text-yellow-300 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
