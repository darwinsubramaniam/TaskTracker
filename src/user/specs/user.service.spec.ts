import { Test, TestingModule } from '@nestjs/testing';
import { UserDataAccessService } from '../../data-access/user/user.service';
import { UserService } from '../user.service';

class MockUserDBService {}

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    })
    .useMocker((token) => {
      if (token === UserDataAccessService) {
        return new MockUserDBService();
      }
    })
    .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
