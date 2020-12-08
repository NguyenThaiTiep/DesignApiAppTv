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
import {
  BookOrderCreateDto,
  BookOrderInfoDto,
  BookOrderList,
} from '../dto/Book/bookOrder.dto';
import {
  BookDetailGetDto,
  BookDetailInputDto,
} from '../dto/Book/book.detail.dto';
import { BookInputDto, BookTitleDto } from '../dto/Book/book.dto';
import { HandelSuccess } from '../dto/handleStatus';

@ApiTags('book')
@Controller('book')
export class BookController {
  @Get('/?skip=:skip&take=:take')
  @ApiResponse({ type: [BookTitleDto] })
  async getAll(@Query('skip') skip?: number, @Query('take') take?: number) {
    return [new BookTitleDto()];
  }
  @Post('create')
  async create(@Body() input: BookInputDto) {
    return new HandelSuccess();
  }
  @Put('update')
  async update(@Body() input: BookInputDto) {
    return new HandelSuccess();
  }
  @Get('/:id')
  @ApiResponse({ type: BookTitleDto })
  getById(
    @Param('id')
    id: number,
  ) {
    return new BookTitleDto();
  }
  @Delete('/:id')
  async remove(
    @Param('id')
    id: number,
  ) {
    return new HandelSuccess();
  }
  @Post('bookdetail/create')
  @ApiResponse({ type: HandelSuccess })
  createBookDetail(@Body() input: BookDetailInputDto) {
    return new HandelSuccess();
  }
  @Get('/bookDetail/:id')
  @ApiResponse({ type: BookDetailGetDto })
  GetById(@Param(':id') id: string) {
    return new BookDetailGetDto();
  }
  @Delete('bookDetail/:id')
  async removeBookDetail(
    @Param('id')
    id: number,
  ) {
    return new HandelSuccess();
  }
  @Post('/bookOrder/create')
  @ApiResponse({ type: BookDetailGetDto })
  bookOrderCreate(@Body() input: BookOrderCreateDto) {
    return new HandelSuccess();
  }
  @Get('/bookOrder/history/take=:take&skip=:skip')
  @ApiResponse({ type: [BookOrderList] })
  bookOrderHistory(@Query('take') take: number, @Query('skip') skip?: number) {
    return [new BookOrderList()];
  }
  @Get('/bookOrder/:id')
  @ApiResponse({ type: BookOrderInfoDto })
  getBookOrder(@Param('id') id: number) {
    return new BookOrderInfoDto();
  }
}
