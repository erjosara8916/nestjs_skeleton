import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PaginatedResponse } from "src/common/value-objects/http/paginated-response.vo";

export interface Response<T> {
  data: T;
}

export class TestResponse implements Response<any> {
  data: any
  constructor(items: any, count: number) {
    this.data = items;
  }
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const {page, limit} =  request.query
    const {path} = request.route

    return next.handle().pipe(map(data => {

      const { items, total_items } = data;
      const response = new PaginatedResponse(
        items, page, limit,  total_items, path
      )
      return response
    }));
  }
}