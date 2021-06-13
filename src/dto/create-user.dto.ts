import { BaseModel } from './base-model';

export interface CreateUserDto extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
