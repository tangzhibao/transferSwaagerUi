import { Injectable } from '@nestjs/common';
import mock from './swagger.mock';

@Injectable()
export class MockService {
  getMockedSwaggerInfo() {
    return mock;
  }
}
