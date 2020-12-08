import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserInfoTitleDto, UserNotificationDto } from '../user/user.dto';
import { PosterNotificationDto, PosterTitleDto } from './poster.dto';

export class NotificationGetList {
  @ApiProperty()
  notification_id: number;
  @ApiProperty()
  notification_context: string;
  @ApiProperty()
  notification_creat_at: Date;
  @ApiProperty()
  notification_posterId: number;
  @ApiProperty()
  notification_userCreateId: number;

  @ApiProperty()
  userCreate_name: string;
  @ApiProperty()
  userCreate_avatar: string;
  @ApiProperty()
  isSeen: boolean;
}
export class NotificationSeenDto {
  userId: number;
}
