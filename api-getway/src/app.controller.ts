import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { SendTed } from './dto/send.ted.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(202)
  @UseGuards(AuthGuard('jwt'))
  @Post()
  sendTed(@Body() body: SendTed) {
    return this.appService.sendTed(body);
  }
}
