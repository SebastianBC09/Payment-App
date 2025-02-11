import { FC } from 'react'
import { useForm } from 'react-hook-form';
import { CreateCustomerRequest, CustomerType } from '../../types/customer';
import { CustomerSelect } from './CustomerSelect';

interface CustomerFormProps {
  onSubmit: (data: CreateCustomerRequest) => Promise<void>;
  isLoading: boolean;
}

export const CustomerForm:FC<CustomerFormProps> = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<CreateCustomerRequest>({
    defaultValues: {
      organizationType: 'BUSINESS' as CustomerType
    }
  });

  const organizationType = watch('organizationType');

  const handleOrganizationChange = (value: CustomerType) => {
    setValue('organizationType', value);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business Name
        </label>
        <input
          {...register('name')}
          className="input-field"
          placeholder="Enter your business name"
        />
      </div>
      <CustomerSelect
        value={organizationType}
        onChange={handleOrganizationChange}
        error={errors.organizationType?.message}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {isLoading && (
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {isLoading ? 'Processing...' : 'Create Account'}
      </button>
    </form>
  );
};
