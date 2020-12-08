import { ApiProperty } from '@nestjs/swagger';

export class HandelSuccess {
  @ApiProperty()
  status?: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: any;
  constructor() {
    this.status = 200;
    this.message = 'Thành công';
  }
}
