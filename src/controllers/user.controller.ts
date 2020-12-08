import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HandelSuccess } from '../dto/handleStatus';
import {
  UserInputDto,
  UserTitleDto,
  UserUpdateInputDto,
} from '../dto/user/user.dto';
import { UserService } from '../services/user.service';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get('/?skip=:skip&take=:take')
  @ApiResponse({ type: [UserTitleDto] })
  async getAll(@Query('skip') skip?: number, @Query('take') take?: number) {
    return this.service.getAll();
  }
  @Post('create')
  async create(@Body() input: UserInputDto) {
    return new HandelSuccess();
  }
  @Put('update')
  async update(@Body() input: UserUpdateInputDto) {
    return new HandelSuccess();
  }
  @Put('updateRole')
  async updateRole(@Body() input: UserInputDto) {
    return new HandelSuccess();
  }
  @Delete('/:id')
  async remove(
    @Param('id')
    id: number,
  ) {
    return new HandelSuccess();
  }
}
