import { Injectable, Module } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from '../project.service';
import { ProjectDataAccessService } from '../../data-access/project/project.service';

class MockProjectDBService {}

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [ProjectService],
    })
    .useMocker((token) => {
      if (token === ProjectDataAccessService) {
        return new MockProjectDBService();
      }
    })
    .compile();

    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});


