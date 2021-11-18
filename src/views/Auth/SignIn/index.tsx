import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'services/axios';
import Form from './Form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface DataPayload {
  email: string;
  password: string;
}

const SignIn = () => {
  const history = useHistory();
  const SwalFire = withReactContent(Swal);

  const [submitMutation, { isLoading }] = useMutation(
    async (data: DataPayload) => {
      const response = await axios.post('/login', data);

      return response;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem('@App/JWT', data.data?.data);
        history.push('/profile');
      },
      onError: () => {
        SwalFire.fire({
          title: 'Email ou senha invalidos',
          didOpen: () => {
            SwalFire.clickConfirm();
          }
        }).then(() => {
          return SwalFire.fire(<p> Email ou senha invalidos</p>)
        })
      }
    }
  );

  return <Form submitMutation={submitMutation} isLoading={isLoading} />;
};

export default SignIn;
