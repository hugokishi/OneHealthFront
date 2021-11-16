import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'services/axios';
import Form from './Form';

interface DataPayload {
  email: string;
  password: string;
}

const SignIn = () => {
  const history = useHistory();

  const [submitMutation, { isLoading }] = useMutation(
    async (data: DataPayload) => {
      const response = await axios.post('/login', data);

      return response;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem('@App/JWT', data.data?.data)
        history.push('/profile');
      }
    }
  );

  return <Form submitMutation={submitMutation} isLoading={isLoading} />;
};

export default SignIn;
