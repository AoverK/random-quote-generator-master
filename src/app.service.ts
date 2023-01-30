import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findOne(): string {
    return 'Hello World!';
  }
}
