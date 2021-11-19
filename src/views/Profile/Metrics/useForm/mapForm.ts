interface CreateMetricsProps {
  type: string;
  amountType: string;
  amount: string;
}

const MapForm = (payload: CreateMetricsProps) => {
  switch (payload.type) {
    case 'water':
      return {
        waterAmount: payload.amount,
        amountType: payload.amountType.toUpperCase()
      };
    case 'food':
      return {
        foodName: payload.amount
      };
    case 'weight':
      return {
        weightAmount: payload.amount,
        amountType: payload.amountType.toUpperCase()
      };
    default:
      return {};
  }
};

const getUrl = (payload: CreateMetricsProps): string => {
  switch (payload.type) {
    case 'water':
      return '/water-consumption';
    case 'food':
      return '/food-consumption';
    case 'weight':
      return '/weight'
    default:
      return '/health';
  }
};

export { MapForm, getUrl };
