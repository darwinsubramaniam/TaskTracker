import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTaskController } from './project_task.controller';
import { ProjectTaskService } from './project_task.service';

describe('ProjectTaskController', () => {
  let controller: ProjectTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectTaskController],
      providers: [ProjectTaskService],
    }).compile();

    controller = module.get<ProjectTaskController>(ProjectTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
