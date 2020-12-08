import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HandelSuccess } from '../dto/handleStatus';
import { StudentInputDto, StudentSearchDto } from '../dto/student/student.dto';
@ApiTags('student')
@Controller()
export class StudentController {
  @Get('/search/book/:id')
  @ApiResponse({ type: [StudentSearchDto] })
  async getById(@Param('id') id: string) {
    return [new StudentSearchDto()];
  }
  @Put('/update')
  @ApiResponse({ type: HandelSuccess })
  async update(@Body() input: StudentInputDto) {
    return new HandelSuccess();
  }
}
