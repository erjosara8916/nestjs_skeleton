import { Controller, Delete, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('v1/cats')
@Controller('v1/cats')
export class DeleteCatController {
	@Delete(':id')
	async update(@Param('id') id: string): Promise<string> {
		return 'This action deletes a cat';
	}
}
