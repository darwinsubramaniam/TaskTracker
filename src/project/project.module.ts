import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectDataAccessModule } from 'src/data-access/project/project.module';

@Module({
  imports: [ProjectDataAccessModule],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
