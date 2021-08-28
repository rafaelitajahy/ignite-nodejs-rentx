import { ICreateUserTDO } from '../dtos/ICreateUserTDO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserTDO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
