import React, { useState } from 'react';
import { Calculator, IndianRupee } from 'lucide-react';
import { QuoteRequest } from '../types';
import { calculateQuote } from '../utils/calculator';

const QuoteCalculator: React.FC = () => {
  const [request, setRequest] = useState<QuoteRequest>({
    productType: 'health',
    age: 30,
    coverage: 500000
  });
  const [quote, setQuote] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    setIsCalculating(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    const result = calculateQuote(request);
    setQuote(result);
    setIsCalculating(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-blue-700" />
        <h3 className="text-xl font-bold text-gray-900">Premium Calculator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Insurance Type
          </label>
          <select
            value={request.productType}
            onChange={(e) => setRequest({ ...request, productType: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="health">Health Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="auto">Auto Insurance</option>
            <option value="home">Home Insurance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <input
            type="number"
            value={request.age || ''}
            onChange={(e) => setRequest({ ...request, age: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your age"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Coverage Amount (₹)
          </label>
          <input
            type="number"
            value={request.coverage || ''}
            onChange={(e) => setRequest({ ...request, coverage: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter coverage amount"
          />
        </div>

        <button
          onClick={handleCalculate}
          disabled={isCalculating}
          className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCalculating ? 'Calculating...' : 'Calculate Premium'}
        </button>

        {quote && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-center space-x-2">
              <IndianRupee className="h-6 w-6 text-green-600" />
              <span className="text-2xl font-bold text-green-800">
                {quote.toLocaleString('en-IN')}
              </span>
              <span className="text-green-600 font-medium">/year</span>
            </div>
            <p className="text-center text-green-700 text-sm mt-2">
              Estimated annual premium
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteCalculator;