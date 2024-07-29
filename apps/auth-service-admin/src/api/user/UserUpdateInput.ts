import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  confirmPassword?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  provider?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
