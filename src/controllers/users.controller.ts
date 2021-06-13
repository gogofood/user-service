import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user.dto';
import { ResponseModel } from '../dto/response-model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ResponseModel<UserDto>> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
