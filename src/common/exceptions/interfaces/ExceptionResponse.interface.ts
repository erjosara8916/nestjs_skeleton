import { HttpStatus } from '@nestjs/common';

export interface ExceptionResponse {
  status: HttpStatus;
  errors: string[];
}