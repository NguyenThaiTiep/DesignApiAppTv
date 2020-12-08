import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RoleDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  Code: string;
  @ApiProperty()
  isSendEmail: boolean;
  @ApiProperty()
  isCreateOrEditSheet: boolean;
  @ApiProperty()
  isCreateOrEditBook: boolean;
  @ApiProperty()
  isCreateOrEditUser: boolean;
  @ApiProperty()
  isCreateOrEditStudent: boolean;
  @ApiProperty()
  isCreatePost: boolean;
}
export class RoleTitleDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  Code: string;
}
