import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { NotificationGetList } from '../poster/notification.dto';
import { DepartmentTitleDto } from './department.dto';
import { RoleDto, RoleTitleDto } from './role.dto';

export class UserInputDto {
  // @ApiProperty()
  id?: number;
  @ApiProperty()
  gender: boolean;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  born?: Date;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  phoneNumber?: string;
  @ApiProperty()
  password?: string;
  @ApiProperty()
  roleId?: number;
  // @ApiProperty()
  roleCode?: string;
  // @ApiProperty()
  departmentId?: number;
  // @ApiProperty()
  departmentCode?: number;
  // @ApiProperty()
  avatar?: string;
  @ApiProperty()
  GenCode: string;
  // @ApiProperty()
  isBlock: boolean;
}
export class UserUpdateInputDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  gender: boolean;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  password?: string;
  @ApiProperty()
  phoneNumber?: string;
  @ApiProperty()
  born?: Date;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  GenCode: string;
  @ApiProperty()
  email?: string;
}
export class UserTitleDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  born?: Date;
  @ApiProperty()
  @Type((type) => RoleTitleDto)
  role: RoleTitleDto;
  @ApiProperty()
  @Type((type) => DepartmentTitleDto)
  department: DepartmentTitleDto;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  GenCode: string;
  @ApiProperty()
  gender: boolean;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  phoneNumber?: string;
  @ApiProperty()
  isBlock: boolean;
}
export class UserInfoTitleDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  GenCode: string;
  @ApiProperty()
  gender: boolean;
  @ApiProperty()
  isBlock: boolean;
  @ApiProperty()
  avatar: string;
}
export class UserNotificationDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  @Type((o) => NotificationGetList)
  notificationSeen: NotificationGetList[];
  @ApiProperty()
  @Type((o) => NotificationGetList)
  notificationSubscribe: NotificationGetList[];
}
export class UserPostTitleDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  @Type((type) => DepartmentTitleDto)
  department: DepartmentTitleDto;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  GenCode: string;
  @ApiProperty()
  gender: boolean;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  phoneNumber?: string;
}
export class UserAccountDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  born?: Date;
  @ApiProperty()
  @Type((type) => RoleDto)
  role: RoleDto;
  @ApiProperty()
  @Type((type) => DepartmentTitleDto)
  department: DepartmentTitleDto;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  GenCode: string;
  @ApiProperty()
  gender: boolean;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  phoneNumber?: string;
}
export class AccountChangePassword {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  password: string;
  @ApiProperty()
  newPassword: string;
}
export class UserInputSheetDto {
  @ApiProperty()
  gender: boolean;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  born?: Date;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  phoneNumber?: string;
  @ApiProperty()
  password?: string;
  @ApiProperty()
  roleCode?: string;
  @ApiProperty()
  departmentCode?: string;
  @ApiProperty()
  avatar?: string;
  @ApiProperty()
  GenCode: string;
}
export class AccountDto {
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
}
export class AccountChangePassDto {
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
  @ApiProperty()
  newpassword?: string;
}
