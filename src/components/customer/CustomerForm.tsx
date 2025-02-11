import { FC } from 'react'
import { useForm } from 'react-hook-form';
import { CreateCustomerRequest, CustomerType } from '../../types/customer';
import { CustomerSelect } from './CustomerSelect';

interface CustomerFormProps {
  onSubmit: (data: CreateCustomerRequest) => Promise<void>;
  isLoading: boolean;
}

export const CustomerForm:FC<CustomerFormProps> = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateCustomerRequest>();
  const customerType = watch('organizationType');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full p-2 border rounded-md"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <CustomerSelect
        value={customerType as CustomerType}
        onChange={(value) => register('organizationType').onChange({ target: { value } })}
        error={errors.organizationType?.message}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 disabled:opacity-50"
      >
        {isLoading ? 'Creating...' : 'Create Account'}
      </button>
    </form>
  );
};
