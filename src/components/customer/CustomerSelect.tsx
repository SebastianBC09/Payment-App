import { FC } from 'react'
import { CUSTOMER_TYPES, CustomerType } from '../../types/customer'

interface CustomerSelectProps {
  value: CustomerType;
  onChange: (value: CustomerType) => void;
  error?: string
}

export const CustomerSelect:FC<CustomerSelectProps> = ({value, onChange, error}) => {
  return (
    <div>
      <label className='block text-sm font-medium mb-1'>Organization Type</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as CustomerType)}
        name="" id="">
        {CUSTOMER_TYPES.map((type) =>(
          <option key={type} value={type}>
            {type.charAt(0) + type.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}
