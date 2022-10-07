import { Injectable } from '@nestjs/common';
import { ProjectDataAccessService } from '../data-access/project/project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private projectDBService: ProjectDataAccessService) { }
  create(createProjectDto: CreateProjectDto) {
    return this.projectDBService.create(createProjectDto);
  }

  findAll() {
    return this.projectDBService.findAll();
  }

  findOne(id: string) {
    return this.projectDBService.findOne(id);
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.projectDBService.update(id, updateProjectDto);
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
