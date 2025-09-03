import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Protecting What 
            <span className="text-green-400"> Matters Most</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive insurance solutions tailored for your peace of mind. 
            Join thousands of satisfied customers who trust us with their future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/tools"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-blue-600 rounded-full p-4 mb-2">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-blue-100">Customer Support</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-600 rounded-full p-4 mb-2">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">50,000+</h3>
              <p className="text-blue-100">Trusted Customers</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-yellow-500 rounded-full p-4 mb-2">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">99%</h3>
              <p className="text-blue-100">Claim Settlement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;