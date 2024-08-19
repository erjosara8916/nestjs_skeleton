import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { CatEntity } from 'src/domain/entities/cat.entity';

@Entity()
export class Cat extends CatEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	age: number;

	@Column()
	breed: string;
}
