import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleTitleDto } from '../dto/user/role.dto';
@ApiTags('role')
@Controller('role')
export class RoleController {
  @Get('/')
  @ApiResponse({ type: [RoleTitleDto] })
  async getAll() {
    return [new RoleTitleDto()];
  }
}
