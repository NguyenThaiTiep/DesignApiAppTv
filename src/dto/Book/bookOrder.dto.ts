import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { StudentGetDto, StudentTitleDto } from '../student/student.dto';
import { UserInfoTitleDto, UserTitleDto } from '../user/user.dto';
import { BookDetailGetDto } from './book.detail.dto';

export class BookOrderCreateDto {
  id: number;
  @ApiProperty()
  borrowDate: Date;
  @ApiProperty()
  idBookdetail: string;
  @ApiProperty()
  idStudent: string;
  @ApiProperty()
  deadline: Date;
  @ApiProperty()
  userCheckInId: number;
}
export class BookOrderGetDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  borrowDate: Date;
  @ApiProperty()
  payDate: Date;
  @ApiProperty()
  deadline: Date;
  @ApiProperty()
  @Type((type) => BookDetailGetDto)
  bookdetail: BookDetailGetDto;
}
export class BookOrderInfoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  borrowDate: Date;
  @ApiProperty()
  payDate: Date;
  @ApiProperty()
  deadline: Date;
  @ApiProperty()
  @Type((type) => BookDetailGetDto)
  bookdetail: BookDetailGetDto;
  @ApiProperty()
  @Type((type) => UserInfoTitleDto)
  userCheckIn: UserInfoTitleDto;
  @ApiProperty()
  @Type((type) => UserInfoTitleDto)
  userCheckOut: UserInfoTitleDto;
}
export class BookOrderPayDto {
  @ApiProperty()
  idBookDetail: string;
  @ApiProperty()
  id: number;
  @ApiProperty()
  studentId: string;
  @ApiProperty()
  payDate: Date;
  @ApiProperty()
  userCheckOutId: number;
}
export class BookOrderList {
  @ApiProperty()
  id: number;
  @ApiProperty()
  @Type((o) => BookDetailGetDto)
  bookdetail: BookDetailGetDto;
  @ApiProperty()
  @Type((o) => StudentTitleDto)
  student: StudentTitleDto;
  @ApiProperty()
  type: boolean;
  @ApiProperty()
  update_at: Date;
  @ApiProperty()
  payDate: Date;
  @ApiProperty()
  borrowDate: Date;
}
