import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Cat as CatEntity } from 'src/domain/cat/entities/cat.entity';

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
