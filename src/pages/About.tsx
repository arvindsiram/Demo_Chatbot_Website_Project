import React from 'react';
import { Award, Shield, Heart, Target} from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '1995', event: 'SafeGuard Insurance Co. founded' },
    { year: '2005', event: 'Expanded to 10 states across India' },
    { year: '2015', event: 'Achieved 1 million policy holders' },
    { year: '2020', event: 'Launched digital-first services' },
    { year: '2025', event: 'Serving 50,000+ happy customers' }
  ];

  const leadership = [
    {
      name: 'Amit Sharma',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '20+ years in insurance industry, former VP at leading insurance companies.'
    },
    {
      name: 'Dr. Priya Nair',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Technology visionary with expertise in insurtech and digital transformation.'
    },
    {
      name: 'Rajesh Gupta',
      role: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Financial expert ensuring sustainable growth and customer-first policies.'
    }
  ];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-200 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 dark:bg-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About SafeGuard Insurance</h1>
          <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed">
            For over 30 years, we've been committed to protecting families and businesses 
            across India with innovative insurance solutions and unparalleled customer service.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 dark:bg-gray-800 rounded-xl">
              <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide comprehensive, affordable insurance solutions that give our customers 
                confidence and peace of mind in protecting their future.
              </p>
            </div>
            
            <div className="text-center p-8 bg-green-50 dark:bg-gray-800 rounded-xl">
              <Heart className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be India's most trusted insurance partner, known for innovation, 
                integrity, and putting customers at the heart of everything we do.
              </p>
            </div>
            
            <div className="text-center p-8 bg-yellow-50 dark:bg-gray-800 rounded-xl">
              <Shield className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Values</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Transparency, reliability, and customer-centricity guide every decision we make. 
                We believe in building lasting relationships based on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Three decades of growth, innovation, and unwavering commitment to our customers.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-gray-700"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">{milestone.year}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow">
                    <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-900 dark:bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-blue-200 dark:text-blue-300">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">99%</h3>
              <p className="text-blue-200 dark:text-blue-300">Claim Settlement Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">₹500Cr+</h3>
              <p className="text-blue-200 dark:text-blue-300">Claims Settled</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="text-blue-200 dark:text-blue-300">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the experienced professionals who guide SafeGuard's vision and strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
                <img
                  src={leader.image}
                  alt={`Portrait of ${leader.name}, ${leader.role}`} // Added alt tag
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{leader.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{leader.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Trust & Recognition</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading industry authorities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'IRDAI Licensed',
              'ISO 9001:2015 Certified',
              'Best Insurance Provider 2023',
              'Customer Choice Award'
            ].map((cert, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                <Award className="h-12 w-12 text-yellow-500 dark:text-yellow-400 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 dark:text-gray-100">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;