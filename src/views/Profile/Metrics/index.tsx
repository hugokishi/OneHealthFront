import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'services/axios';
import Form from './Form';
import { MapForm, getUrl } from './useForm/mapForm';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface CreateMetricsProps {
  type: string;
  amountType: string;
  amount: string;
}

const SignIn = () => {
  const history = useHistory();
  const SwalFire = withReactContent(Swal);

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
        SwalFire.fire({
          title: 'Medidas',
          didOpen: () => {
            SwalFire.clickConfirm();
          }
        }).then(() => {
          return SwalFire.fire(
            <p>
              {data.data.data.weightAmount && 'Peso adicionado com sucesso!'}
              {data.data.data.foodName && 'Refeição adicionada com sucesso!'}
              {data.data.data.waterAmount && 'Quantidade de água ingerida adicionada com sucesso!'}
            </p>
          );
        }).then(() => {
          history.push('/profile')
        });
      }
    }
  );

  return <Form submitMutation={submitMutation} isLoading={isLoading} />;
};

export default SignIn;
