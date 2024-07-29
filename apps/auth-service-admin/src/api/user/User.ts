import { JsonValue } from "type-fest";

export type User = {
  confirmPassword: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  provider?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
