import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users = [];
  async saveUser(user: UserEntity) {
    this.users.push(user);
  }
  async listUser() {
    return this.users;
  }
  async findUserByEmail(email: string) {
    const userFound = this.users.find((user) => user.email === email);
    return userFound !== undefined;
  }
}
