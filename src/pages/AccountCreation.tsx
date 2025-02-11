import { FC, useEffect } from 'react';
import { CustomerForm } from '../components/customer/CustomerForm';
import { CustomerStatus } from '../components/customer/CustomerStatus';
import { checkCustomerStatus, createCustomer } from '../store/slices/customerSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CreateCustomerRequest } from '../types/customer';


const AccountCreation:FC = () => {
  const dispatch = useAppDispatch();
  const { customer, kycLink, status } = useAppSelector((state) => state.customer);

  const handleSubmit = async (data: CreateCustomerRequest) => {
    await dispatch(createCustomer(data)).unwrap();
  };

  useEffect(() => {
    if (customer?.id && customer.status === 'PENDING') {
      const interval = setInterval(() => {
        dispatch(checkCustomerStatus(customer.id));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [customer?.id, customer?.status, dispatch]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 card text-white mb-8">
        <h1 className="text-3xl font-bold">Welcome to MuralPay</h1>
        <p className="mt-2 opacity-90">Create your account to start making global payments</p>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Details</h2>
        {!customer ? (
          <CustomerForm onSubmit={handleSubmit} isLoading={status === 'loading'} />
        ) : (
          <CustomerStatus customer={customer} kycLink={kycLink} />
        )}
      </div>
    </div>
  );
};

export default AccountCreation;
