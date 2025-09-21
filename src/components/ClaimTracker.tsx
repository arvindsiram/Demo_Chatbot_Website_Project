import React, { useState } from 'react';
import { Search, CheckCircle, Clock, XCircle, FileText } from 'lucide-react';
import { getClaimStatus } from '../utils/calculator';
import { ClaimStatus } from '../types';

const ClaimTracker: React.FC = () => {
  const [claimId, setClaimId] = useState('');
  const [claimStatus, setClaimStatus] = useState<ClaimStatus | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!claimId.trim()) {
      setError('Please enter a claim ID');
      return;
    }

    setIsSearching(true);
    setError('');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const result = getClaimStatus(claimId.toUpperCase());
    if (result) {
      setClaimStatus(result);
    } else {
      setError('Claim ID not found. Please check and try again.');
      setClaimStatus(null);
    }
    
    setIsSearching(false);
  };

  const getStatusIcon = (status: ClaimStatus['status']) => {
    switch (status) {
      case 'submitted':
        return <FileText className="h-6 w-6 text-blue-500" />;
      case 'under-review':
        return <Clock className="h-6 w-6 text-yellow-500" />;
      case 'approved':
      case 'settled':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-6 w-6 text-red-500" />;
      default:
        return <FileText className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: ClaimStatus['status']) => {
    switch (status) {
      case 'submitted':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'under-review':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'approved':
      case 'settled':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'rejected':
        return 'text-red-700 bg-red-50 border-red-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Search className="h-6 w-6 text-blue-700" />
        <h3 className="text-xl font-bold text-gray-900">Claim Tracker</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Claim ID
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={claimId}
              onChange={(e) => setClaimId(e.target.value)}
              placeholder="e.g., CLM001"
              className="p-2 rounded-md bg-gray-50 border-gray-300 text-gray-900 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
            />
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? 'Searching...' : 'Track'}
            </button>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {claimStatus && (
          <div className="mt-6 space-y-4">
            <div className={`p-4 rounded-lg border ${getStatusColor(claimStatus.status)}`}>
              <div className="flex items-center space-x-3 mb-3">
                {getStatusIcon(claimStatus.status)}
                <div>
                  <h4 className="font-semibold capitalize">
                    {claimStatus.status.replace('-', ' ')}
                  </h4>
                  <p className="text-sm opacity-75">
                    Claim ID: {claimStatus.id}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Claim Amount:</span>
                  <span className="font-semibold">₹{claimStatus.amount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Submitted:</span>
                  <span>{new Date(claimStatus.submittedDate).toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated:</span>
                  <span>{new Date(claimStatus.lastUpdated).toLocaleDateString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-700 text-sm">
            <strong>Demo Claims:</strong> Try CLM001 or CLM002 to see sample claim statuses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClaimTracker;
