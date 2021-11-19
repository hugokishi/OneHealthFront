import React from 'react';
import { Box, Link, Typography, MenuItem, FormHelperText } from '@material-ui/core';
import useStyles from './styles';
import { ArrowBack } from '@material-ui/icons';
import SimpleInput from 'components/Input';
import SimpleButton from 'components/Button';
import SimpleSelect from 'components/Select';
import { Link as RouterLink } from 'react-router-dom';
import useForm from './useForm/useForm';
import { Controller } from 'react-hook-form';

interface FormProps {
  submitMutation: () => void;
  isLoading: boolean;
}

const Form = ({ submitMutation, isLoading }: FormProps) => {
  const classes = useStyles();

  const { handleSubmit, register, errors, watch, control } = useForm({
    defaultValues: {
      type: '',
      amountType: '',
      amount: ''
    }
  });

  const type = watch('type');

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Box className={classes.header}>
          <img src="/assets/health-track.png" alt="One Health" className={classes.image} />
          <Typography variant="h1" className={classes.title}>
            Cadastro
          </Typography>
          <Typography variant="body1" className={classes.healthText}>
            Descreva o que deseja cadastrar para podermos auxilia-lo!
          </Typography>
          <Link component={RouterLink} to="/profile" variant="body2" className={classes.link}>
            <ArrowBack />
            Voltar para home
          </Link>
        </Box>
        <form className={classes.form} onSubmit={handleSubmit(submitMutation)}>
          <Box className={classes.input}>
            <Typography variant="h5" className={classes.type}>
              Type
            </Typography>
            <Controller
              name="type"
              control={control}
              render={({ onChange, value, ref }) => {
                return (
                  <SimpleSelect
                    fullWidth
                    inputRef={ref}
                    onChange={(event) => onChange(event.target.value)}
                    defaultValue=""
                    value={value}>
                    <MenuItem value="water">Água</MenuItem>
                    <MenuItem value="food">Comida</MenuItem>
                    <MenuItem value="weight">Peso</MenuItem>
                  </SimpleSelect>
                );
              }}
            />
          </Box>
          {(type === 'water' || type === 'weight') && (
            <>
              <Box className={classes.input}>
                <SimpleInput
                  defaultLabel={
                    type === 'water' ? 'Quantidade em L ou ML' : 'Quantidade em KG ou MG'
                  }
                  id="input-name"
                  placeholder="Ex:. One Health"
                  name="amount"
                  error={errors['amount']?.message ? true : false}
                  inputRef={register()}
                />
                <FormHelperText error>{errors['amount']?.message}</FormHelperText>
              </Box>
              <Box className={classes.input}>
                <SimpleInput
                  defaultLabel={type === 'water' ? 'Medida (L, ML)' : 'Medida (KG, MG)'}
                  id="input-qtd"
                  placeholder="Quantidade"
                  name="amountType"
                  error={errors['amountType']?.message ? true : false}
                  inputRef={register()}
                />
                <FormHelperText error>{errors['amountType']?.message}</FormHelperText>
              </Box>
            </>
          )}
          {type === 'food' && (
            <Box className={classes.input}>
              <SimpleInput
                defaultLabel="Name"
                id="input-name"
                placeholder="Ex:. One Health"
                name="amount"
                error={errors['amount']?.message ? true : false}
                inputRef={register()}
              />
              <FormHelperText error>{errors['amount']?.message}</FormHelperText>
            </Box>
          )}

          <SimpleButton
            text="Cadastrar"
            variant="contained"
            color="primary"
            className={classes.button}
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;
