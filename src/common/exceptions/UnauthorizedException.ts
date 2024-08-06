import { HttpStatus } from "@nestjs/common";

import { CustomHttpException } from "./CustomHttpException";

export class UnauthorizedException extends CustomHttpException {
  constructor(message = 'You don\'t have permission to access this resource') {
    super({
      status: HttpStatus.UNAUTHORIZED,
      errors: [message],
    }, HttpStatus.UNAUTHORIZED, [message]);
  }
}