import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import schema from './schema';

interface UseFormProps {
  type: string;
  amountType: string;
  amount: string;
}

const useFormForSignIn = ({ defaultValues }: { defaultValues: UseFormProps }) => {
  const { control, handleSubmit, register, errors, watch, setValue } = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
    mode: 'all'
  });

  return {
    control,
    handleSubmit,
    register,
    errors,
    watch,
    setValue
  };
};

export default useFormForSignIn;
