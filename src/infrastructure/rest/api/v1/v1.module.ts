import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
	imports: [CatsModule],
})
export class V1Module {}
