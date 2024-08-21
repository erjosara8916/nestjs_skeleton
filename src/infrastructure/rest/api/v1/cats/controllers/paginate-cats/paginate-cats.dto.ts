import { ApiProperty } from '@nestjs/swagger';

import { PaginateEntityDTO } from 'src/application/use-cases/base/dto/inputs/paginate-entity.dto';
import { Cat } from 'src/domain/cat/entities/cat.entity';

export class PaginateCatsDTO extends PaginateEntityDTO<Cat> {
	@ApiProperty({
		description: 'Key:value params separated by commas to apply in the query',
		example: 'name:Tom,age:3',
		default: '',
		type: String,
		required: false,
	})
	filter: any;

	@ApiProperty({
		default: 1,
		description: 'Page number',
		example: 1,
		type: Number,
		required: false,
	})
	page: number;

	@ApiProperty({
		default: 20,
		description: 'Limit of items per page',
		example: 20,
		type: Number,
		required: false,
	})
	limit: number;

	@ApiProperty({
		default: '',
		description: 'key:direction options separated by commas to sort the items',
		example: 'name:asc,age:desc',
		type: String,
		required: false,
	})
	sort: string;
}
