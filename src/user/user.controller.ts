import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUsersDTO } from './dto/ListUsers.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}
  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.name = userData.name;
    userEntity.password = userData.password;
    userEntity.id = uuid();

    this.userRepository.saveUser(userEntity);
    return {
      usuario: new ListUsersDTO(userEntity.id, userEntity.name),
      message: 'user created successfully',
    };
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.userRepository.listUser();
    const listedUsers = savedUsers.map(
      (user) => new ListUsersDTO(user.id, user.name),
    );
    return listedUsers;
  }
}
