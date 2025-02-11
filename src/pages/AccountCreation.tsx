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
      <h1 className="text-2xl font-bold mb-6">Create Business Account</h1>

      {!customer ? (
        <CustomerForm onSubmit={handleSubmit} isLoading={status === 'loading'} />
      ) : (
        <CustomerStatus customer={customer} kycLink={kycLink} />
      )}
    </div>
  );
};

export default AccountCreation;
