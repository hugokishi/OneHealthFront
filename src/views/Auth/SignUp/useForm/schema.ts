import * as z from 'zod';

export default z.object({
  name: z.string().nonempty({ message: "Can't be empty" }),
  email: z.string().email().nonempty({ message: "Can't be empty" }),
  password: z.string().nonempty({ message: "Can't be empty" }),
  confirmPassword: z.string().nonempty({ message: "Can't be empty" }),
  birthDate: z.string().nonempty({ message: "Can't be empty" }),
  city: z.string().nonempty({ message: "Can't be empty" })
});
