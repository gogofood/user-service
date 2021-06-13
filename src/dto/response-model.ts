export class ResponseModel<T> {
  constructor(
    status: 'OK' | 'ERROR',
    statusCode: number,
    data?: T,
    message?: string,
  ) {
    this.status = status;
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
  status: 'OK' | 'ERROR';
  statusCode: number;
  data?: T;
  message?: string;
}
