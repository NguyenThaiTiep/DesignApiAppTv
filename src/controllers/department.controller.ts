import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DepartmentTitleDto } from '../dto/user/department.dto';
@ApiTags('Department')
@Controller('department')
export class DepartmentController {
  @Get('/')
  @ApiResponse({ type: [DepartmentTitleDto] })
  async getAll() {
    return [new DepartmentTitleDto()];
  }
}
