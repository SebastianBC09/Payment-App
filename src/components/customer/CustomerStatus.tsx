
import { FC } from "react";
import { Customer } from "../../types/customer";

interface CustomerStatusProps {
  customer: Customer;
  kycLink: string | null;
}

export const CustomerStatus:FC<CustomerStatusProps> = ({ customer, kycLink }) => {
  return (
    <div className="space-y-6">
      <div className="card bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Account Status</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">{customer.status}</p>
          </div>
          <span className={`status-badge ${
            customer.status === 'COMPLETE' ? 'bg-green-100 text-green-800' :
            customer.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
            customer.status === 'ERROR' ? 'bg-red-100 text-red-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {customer.status}
          </span>
        </div>
      </div>

      {kycLink && (
        <div className="card bg-blue-50">
          <div className="flex gap-3">
            <svg className="h-5 w-5 text-blue-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-medium text-blue-800">Verification Required</h3>
              <p className="mt-1 text-sm text-blue-700">Please complete the KYC process to activate your account.</p>
              <a
                href={kycLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 inline-flex items-center bg-blue-500 hover:bg-blue-600"
              >
                Complete Verification
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
