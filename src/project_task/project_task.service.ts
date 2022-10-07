import { Injectable } from '@nestjs/common';
import { ProjectTaskDataAccessService } from 'src/data-access/project_task/project_task.service';
import { CreateProjectTaskDto } from './dto/create-project_task.dto';
import { UpdateProjectTaskDto } from './dto/update-project_task.dto';

@Injectable()
export class ProjectTaskService {
  constructor(private projectTaskDBService:ProjectTaskDataAccessService) {}
  create(createProjectTaskDto: CreateProjectTaskDto) {
    return this.projectTaskDBService.create(createProjectTaskDto);
  }

  findAll() {
    return `This action returns all projectTask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectTask`;
  }

  update(id: number, updateProjectTaskDto: UpdateProjectTaskDto) {
    return `This action updates a #${id} projectTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectTask`;
  }
}
