import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import { AppConfig } from "./app.config";

const environment = [AppConfig];

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    AppConfig,
    config,
    { enableImplicitConversion: true },
  );
  
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}