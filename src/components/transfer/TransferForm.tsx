import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { createTransfer, fetchTransferFees } from "../../store/slices/transferSlice";
import { RecipientInfo, TransferRequest } from "../../types/transfer";

interface TransferFormData {
  amount: number;
  recipientName: string;
  recipientEmail: string;
  recipientPhone: string;
  dateOfBirth: string;
  bankName: string;
  accountType: 'SAVINGS' | 'CHECKING';
  accountNumber: string;
  routingNumber: string;
  documentNumber: string;
  documentType: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
}

export const TransferForm = () => {
  const dispatch = useAppDispatch();
  const { fees, status } = useAppSelector((state) => state.transfer);
  const { session } = useAppSelector((state) => state.customer);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<TransferFormData>();
  const amount = watch('amount');

  useEffect(() => {
    if (amount > 0) {
      dispatch(fetchTransferFees({
        amount,
        currencies: ['COP']
      }));
    }
  }, [amount, dispatch]);

  const onSubmit = async (data: TransferFormData) => {
    if (!session?.accountId) return;

    const recipientInfo: RecipientInfo = {
      name: data.recipientName,
      currencyCode: 'COP',
      tokenAmount: data.amount,
      email: data.recipientEmail,
      dateOfBirth: data.dateOfBirth,
      phoneNumber: data.recipientPhone,
      bankContactDetails: {
        bankName: data.bankName,
        bankAccountOwnerName: data.recipientName,
        currencyCode: 'COP',
        accountType: data.accountType,
        bankAccountNumber: data.accountNumber,
        bankRoutingNumber: data.routingNumber,
        bankCode: data.bankName,
        documentNumber: data.documentNumber,
        documentType: data.documentType,
        physicalAddress: {
          address1: data.address1,
          address2: data.address2,
          country: 'CO',
          state: data.state,
          city: data.city,
          zip: data.zip
        }
      }
    };

    const transferRequest: TransferRequest = {
      payoutAccountId: session.accountId,
      recipientsInfo: [recipientInfo]
    };

    try {
      await dispatch(createTransfer(transferRequest)).unwrap();
    } catch (error) {
      console.error('Transfer creation failed:', error);
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New Transfer</h2>
          <p className="text-sm text-gray-500 mt-1">Send money to Colombian bank accounts</p>
        </div>
        {fees && fees[0] && (
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
            1 USD ≈ {fees[0].exchangeRate} COP
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="number"
                  {...register('amount', { required: 'Amount is required' })}
                  className="input-field pl-8"
                  placeholder="0.00"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              </div>
              {errors.amount && (
                <p className="text-sm text-red-500 mt-1">{errors.amount.message}</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full"
        >
          {status === 'loading' ? 'Creating Transfer...' : 'Create Transfer'}
        </button>
      </form>
    </div>
  );
};
