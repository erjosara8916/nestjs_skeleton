import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export function validate(environment: any) {
	return function (config: Record<string, unknown>) {
		const validatedConfig = plainToInstance(environment, config, {
			enableImplicitConversion: true,
		});

		const errors = validateSync(validatedConfig as Record<string, unknown>, {
			skipMissingProperties: false,
		});

		if (errors.length > 0) {
			throw new Error(errors.toString());
		}
		return validatedConfig;
	};
}
