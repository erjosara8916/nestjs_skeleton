import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { OPEN_API_DOCUMENT } from './swagger.constants';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle(OPEN_API_DOCUMENT.TITLE)
    .setDescription(OPEN_API_DOCUMENT.DESCRIPTION)
    .setVersion(OPEN_API_DOCUMENT.VERSION)
    .addTag(OPEN_API_DOCUMENT.TAGS[0])
    .build();
    
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(OPEN_API_DOCUMENT.BASE_PATH, app, document);
}