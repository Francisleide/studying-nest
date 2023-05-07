import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];
  async saveUser(user) {
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
