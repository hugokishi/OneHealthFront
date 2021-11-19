import * as z from 'zod';

export default z.object({
  type: z.any(),
  amountType: z.any(),
  amount: z.any()
});
