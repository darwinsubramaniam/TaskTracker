import { Test, TestingModule } from '@nestjs/testing';
import { ProjectDataAccessService } from '../../data-access/project/project.service';
import { ProjectController } from '../project.controller';
import { ProjectService } from '../project.service';

class MockProjectDBService {}

describe('ProjectController', () => {
  let controller: ProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [ProjectService],
    }).useMocker((token) => {
      if (token === ProjectDataAccessService) {
        return new MockProjectDBService();
      }
    })
    .compile();

    controller = module.get<ProjectController>(ProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
