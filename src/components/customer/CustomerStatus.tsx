
import { FC } from "react";
import { Customer } from "../../types/customer";

interface CustomerStatusProps {
  customer: Customer;
  kycLink: string | null;
}

export const CustomerStatus:FC<CustomerStatusProps> = ({ customer, kycLink }) => {
  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2 className="font-medium">Customer Created</h2>
      <p>Status: {customer.status}</p>
      {kycLink && (
        <a
          href={kycLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block"
        >
          Complete KYC Process
        </a>
      )}
    </div>
  );
};
