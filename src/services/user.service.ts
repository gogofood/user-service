import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/userRepository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
}
