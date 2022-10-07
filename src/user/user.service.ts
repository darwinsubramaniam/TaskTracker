import { Injectable } from '@nestjs/common';
import { UserDataAccessService } from '../data-access/user/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private userDBService: UserDataAccessService) { }

  create(createUserDto: CreateUserDto) {
    return this.userDBService.create(createUserDto);
  }

  findAll() {
    return this.userDBService.findAll();
  }

  findOne(id: string) {
    return this.userDBService.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userDBService.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userDBService.remove(id);
  }
}
