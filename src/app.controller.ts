import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //rota do tipo get
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
