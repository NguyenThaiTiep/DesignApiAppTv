import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { BookTitleDto } from './book.dto';

export class BookDetailInputDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idBookDetails: string; //masach
  @ApiProperty()
  idBook: string; //masach
}
export class BookDetailGetDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idBookDetails: string; //masach
  @ApiProperty()
  @Type((type) => BookTitleDto)
  book: BookTitleDto;
}
