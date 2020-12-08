import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import {
  UserInfoTitleDto,
  UserPostTitleDto,
  UserTitleDto,
} from '../user/user.dto';
import { CommentGetDto } from './comment.dto';
import { LikeGetDto } from './like.dto';

export class PosterInputDto {
  @ApiProperty()
  urlAssets: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  userCreateId: number;
  @ApiProperty()
  create_at: Date;
}
export class PosterUpdateDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  urlAssets: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  userCreateId: number;
}
export class PosterTitleDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  urlAssets: string;
  @ApiProperty()
  @Type((type) => UserPostTitleDto)
  userCreate: UserPostTitleDto;
  @ApiProperty()
  content: string;
  @ApiProperty()
  create_at: Date;
  @ApiProperty()
  likes: number;
  @ApiProperty()
  comments: number;
  @ApiProperty()
  isLike: boolean;
}
export class PosterDetailDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  urlAssets: string;
  @ApiProperty()
  @Type((type) => UserInfoTitleDto)
  userCreate: UserInfoTitleDto;
  @ApiProperty()
  create_at: Date;
  @ApiProperty()
  content: string;
  @ApiProperty()
  @Type((type) => LikeGetDto)
  likes: LikeGetDto[];
  @ApiProperty()
  @Type((type) => CommentGetDto)
  comments: CommentGetDto[];
}
export class PosterNotificationDto {
  @ApiProperty()
  id: number;
}
