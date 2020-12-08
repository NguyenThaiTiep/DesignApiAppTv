import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class DepartmentTitleDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  Code: string;
}
