import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(
    userDto: CreateUserDto,
    passwordHash: string,
  ): Promise<User> {
    const user = this.create({
      email: userDto.email,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      password: passwordHash,
      createdAt: new Date(),
    });
    await this.insert(user);
    return user;
  }

  findUserByEmail(email: string): Promise<User> {
    return this.findOne({ email: email });
  }
}
