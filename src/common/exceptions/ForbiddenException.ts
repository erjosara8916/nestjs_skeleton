import { HttpStatus } from "@nestjs/common";

import { CustomHttpException } from "./CustomHttpException";

export class ForbiddenException extends CustomHttpException {
  constructor(message = 'You don\'t have permission to access this resource') {
    super({
      status: HttpStatus.FORBIDDEN,
      errors: [message],
    }, HttpStatus.FORBIDDEN, [message]);
  }
}