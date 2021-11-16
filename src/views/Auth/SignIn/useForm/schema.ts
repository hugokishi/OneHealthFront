import * as z from 'zod';

export default z.object({
  email: z.string().email().nonempty({ message: "Can't be empty" }),
  password: z.string().nonempty({ message: "Can't be empty" })
});
