import { Injectable } from '@nestjs/common';
// import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  // constructor(private devConfig: DevConfigService) {}
  getHello(): string {
    // return 'Hello World! ' + this.devConfig.getDBHOST();
    return 'Hello I am learning Nest.js Fundamentals';
  }
}
