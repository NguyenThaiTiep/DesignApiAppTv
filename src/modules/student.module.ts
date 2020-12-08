import { StudentController } from './../controllers/student.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [],
})
export class StudentModule {}
