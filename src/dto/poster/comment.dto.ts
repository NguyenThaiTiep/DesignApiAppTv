import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserInfoTitleDto, UserTitleDto } from '../user/user.dto';

export class CommentInputDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  content: string;
  @ApiProperty()
  asset: string;
  @ApiProperty()
  posterId: number;
  @ApiProperty()
  userId: number;
}
export class CommentGetDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  content: string;
  @ApiProperty()
  asset: string;
  @ApiProperty()
  @Type((o) => UserInfoTitleDto)
  user: UserInfoTitleDto;
  @ApiProperty()
  create_at: Date;
}
