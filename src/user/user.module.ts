import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserDataAccessModule } from 'src/data-access/user/user.module';

@Module({
  imports:[UserDataAccessModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
