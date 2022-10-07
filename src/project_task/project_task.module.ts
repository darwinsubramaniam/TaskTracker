import { Module } from '@nestjs/common';
import { ProjectTaskService } from './project_task.service';
import { ProjectTaskController } from './project_task.controller';

@Module({
  controllers: [ProjectTaskController],
  providers: [ProjectTaskService]
})
export class ProjectTaskModule {}
