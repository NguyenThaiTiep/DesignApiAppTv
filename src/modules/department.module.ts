import { DepartmentController } from './../controllers/department.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [DepartmentController],
  providers: [],
})
export class DepartmentModule {}
