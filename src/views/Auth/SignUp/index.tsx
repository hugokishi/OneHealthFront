import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'services/axios';
import Form from './Form';
import MapForm from './useForm/mapFormToApi';

interface DataPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: any;
  city: string;
}

const SignUp = () => {
  const history = useHistory();

  const [submitMutation, { isLoading }] = useMutation(
    async (data: DataPayload) => {
      const payload = MapForm(data)
      console.log(payload)
      return axios.post('/users', payload)
    },
    {
      onSuccess: () => {
        history.push('/')
      }
    }
  );

  return <Form submitMutation={submitMutation} isLoading={isLoading} />;
};

export default SignUp;
