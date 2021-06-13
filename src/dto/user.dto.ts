import { BaseModel } from './base-model';

export interface UserDto extends BaseModel {
  firstName: string;

  lastName: string;

  email: string;
}
