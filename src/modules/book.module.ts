import { BookController } from './../controllers/book.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class BookModule {}
