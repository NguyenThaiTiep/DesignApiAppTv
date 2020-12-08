import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserInfoTitleDto } from '../user/user.dto';

export class LikeGetDto {
  @ApiProperty()
  @Type((o) => UserInfoTitleDto)
  user: UserInfoTitleDto;
}
export class LikeInputDto {
  @ApiProperty()
  posterId: number;
  @ApiProperty()
  create_at: Date;
  @ApiProperty()
  userId: number;
}
