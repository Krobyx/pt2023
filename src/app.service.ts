import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'AJDE REAL MA DA ZMAGAS DANS!';
  }
}
