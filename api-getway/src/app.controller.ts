import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { SendTed } from './dto/send.ted.dto';
import { depositDto } from './dto/deposit.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(202)
  @UseGuards(AuthGuard('jwt'))
  @Post('ted')
  sendTed(@Body() body: SendTed) {
    return this.appService.sendTed(body);
  }

  @HttpCode(202)
  @UseGuards(AuthGuard('jwt'))
  @Post('deposit')
  deposit(@Body() body: depositDto) {
    console.log(body);

    return this.appService.deposit(body);
  }
}
