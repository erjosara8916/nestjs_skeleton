import { Cat } from '../entities/cat.entity';

export interface CatRepository {
	create(cat: Cat): Promise<Cat>;
	findAll(): Promise<Cat[]>;
	findOne(id: number): Promise<Cat | null>;
	delete(id: number): Promise<void>;
}
