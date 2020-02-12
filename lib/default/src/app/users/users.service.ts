import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dto';
import { User } from './interfaces/users.interface';
import { UsersModel } from './models/users.model';

@Injectable()
export class UsersService {

  private readonly usersModel: User[] = UsersModel;

  findAll(): User[] {
    return this.usersModel;
  }

  findById(id: number): User {
    const findUser = this.usersModel.find(user => user.id === id);
    if (findUser) return findUser;
  }

  create(CreateUserDto: CreateUserDto): User {
    const createdUser = { id: this.usersModel.length + 1, ...CreateUserDto };
    return createdUser;
  }

  update(id: number, updateUserDto: UpdateUserDto): User[] {
    const updateUser = this.usersModel.map(user => {
      if (user.id === id) user = { id: id, ...updateUserDto }
      return user;
    });
    return updateUser;
  }

  delete(id: number): User[] {
    const deleteUser = this.usersModel.filter(user => user.id !== id);
    return deleteUser;
  }
}
