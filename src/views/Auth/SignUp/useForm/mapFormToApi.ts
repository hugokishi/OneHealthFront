interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  city: string;
}

const MapForm = (payload: CreateUserProps) => {
  return {
    name: payload.name,
    email: payload.email,
    password: payload.password,
    birthDate: payload.birthDate,
    city: payload.city
  };
};

export default MapForm;
