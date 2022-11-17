import { Rental } from '../entities/Rental';

interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalbyUser(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
