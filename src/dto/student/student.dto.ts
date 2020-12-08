import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { BookOrderGetDto } from '../Book/bookOrder.dto';
import { FacutlyDto } from './faculty.dto';

export class StudentInputDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idStudent: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  born: Date;
  @ApiProperty()
  grade: string;
  @ApiProperty()
  note: string;
  @ApiProperty()
  facultyId: number;
}
export class StudentTitleDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idStudent: string;
  @ApiProperty()
  name: string;
}
export class StudentGetDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idStudent: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  born: Date;
  @ApiProperty()
  grade: string;
  @ApiProperty()
  note: string;
  @ApiProperty()
  @Type((o) => FacutlyDto)
  faculty: FacutlyDto;
}
export class StudentSearchBookDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idStudent: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  born: Date;
  @ApiProperty()
  grade: string;
  @ApiProperty()
  note: string;
  @ApiProperty()
  @Type((o) => FacutlyDto)
  faculty: FacutlyDto;
}
export class StudentSearchDto {
  @ApiProperty()
  @Type((o) => StudentGetDto)
  studentInfo: StudentGetDto;
  @ApiProperty()
  @Type((o) => BookOrderGetDto)
  bookBorrowed: BookOrderGetDto[];
  @ApiProperty()
  @Type((o) => BookOrderGetDto)
  bookPaid: BookOrderGetDto[];
}
