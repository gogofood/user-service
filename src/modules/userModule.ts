import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/userRepository';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
