import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

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
  async updateUser(id: string, updatedUser: Partial<UserEntity>) {
    const foundUser = this.findUserById(id);
    Object.entries(updatedUser).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      foundUser[key] = value;
    });
    return foundUser;
  }

  async deleteUser(id: string) {
    const foundUser = this.findUserById(id);
    this.users = this.users.filter((savedUser) => savedUser.id !== id);
    return foundUser;
  }
  private findUserById(id: string) {
    const foundUser = this.users.find((user) => user.id === id);

    if (!foundUser) {
      throw new Error('user not found');
    }
    return foundUser;
  }
}
