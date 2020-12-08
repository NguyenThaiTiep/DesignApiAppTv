import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BookInputDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idBook: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  amount: number;
}
export class BookTitleDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idBook: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  amount: number;
}
