import { Module } from '@nestjs/common';
import { ProjectDataAccessModule } from './project/project.module';
import { UserDataAccessModule } from './user/user.module';

@Module({
  imports: [ProjectDataAccessModule, UserDataAccessModule]
})
export class DataAccessModule {}
