import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

import { ExceptionResponse } from './interfaces/ExceptionResponse.interface'

export class CustomHttpException extends HttpException {
  constructor(response: ExceptionResponse, status: HttpStatus, cause?: string[]) {
    super(response, status, {cause});
  }
}