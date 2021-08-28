import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

describe('Authenticate User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    userTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    dateProvider = new DayjsDateProvider();

    authenticateUserUseCase = new AuthenticateUserUseCase();
  });
  createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
});
