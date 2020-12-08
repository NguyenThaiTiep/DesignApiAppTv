import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  AccountChangePassDto,
  AccountDto,
  UserInfoTitleDto,
} from '../dto/user/user.dto';
import { HandelSuccess } from '../dto/handleStatus';
@ApiTags('admin')
@Controller()
export class AdminController {
  @Post('login')
  login(@Body() account: AccountDto) {
    return new HandelSuccess();
  }
  @Put('resetPassWord')
  resetPassWord(@Body() email: string) {
    return new HandelSuccess();
  }
  @Put('changePassword')
  changePassword(@Body() account: AccountChangePassDto) {
    return new HandelSuccess();
  }
  @Post('logout')
  async Logout(@Headers('token') token: string) {
    return new HandelSuccess();
  }
}
