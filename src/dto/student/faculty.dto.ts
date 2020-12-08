import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class FacutlyDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
