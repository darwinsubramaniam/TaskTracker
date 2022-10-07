import { Test, TestingModule } from '@nestjs/testing';
import { UserDataAccessService } from '../../data-access/user/user.service';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

class MockUserDBService {}

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
    .useMocker((token) => {
      if (token === UserDataAccessService) {
        return new MockUserDBService();
      }
    })
    .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
