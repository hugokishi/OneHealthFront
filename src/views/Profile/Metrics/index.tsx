import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'services/axios';
import Form from './Form';
import { MapForm, getUrl } from './useForm/mapForm';

interface CreateMetricsProps {
  type: string;
  amountType: string;
  amount: string;
}

const SignIn = () => {
  const history = useHistory();

  const [submitMutation, { isLoading }] = useMutation(
    async (data: CreateMetricsProps) => {
      const payload = MapForm(data);
      const url = getUrl(data);
      const token = localStorage.getItem('@App/JWT');

      const response = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response;
    },
    {
      onSuccess: (data) => {
        history.push('/profile');
      }
    }
  );

  return <Form submitMutation={submitMutation} isLoading={isLoading} />;
};

export default SignIn;
