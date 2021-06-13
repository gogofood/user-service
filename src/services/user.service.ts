import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/userRepository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user.dto';
import { ApplicationException } from '../common/exceptions/application.exception';
import { ResponseModel } from '../dto/response-model';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<ResponseModel<UserDto>> {
    const existUser = await this.userRepository.findUserByEmail(
      createUserDto.email,
    );

    if (existUser) {
      throw new ApplicationException(400, 'User has already exist!');
    }

    const passwordHash = createUserDto.password;
    const user = await this.userRepository.createUser(
      createUserDto,
      passwordHash,
    );

    return {
      status: 'OK',
      statusCode: 200,
      data: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  }

  getHello(): string {
    return 'Hello World! (Kitchen)';
  }
}
