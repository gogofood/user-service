import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { ApplicationException } from '../exceptions/application.exception';
import { ResponseModel } from '../../dto/response-model';

@Catch()
export class ExceptionHandlerFilter implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    const status =
      error instanceof ApplicationException
        ? HttpStatus.BAD_REQUEST
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (status === HttpStatus.BAD_REQUEST) {
      return response
        .status(status)
        .send(new ResponseModel('ERROR', status, null, error.message));
    }
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      return response
        .status(status)
        .send(new ResponseModel('ERROR', 500, null, 'Internal Server Error.'));
    }
  }
}
