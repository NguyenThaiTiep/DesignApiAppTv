import { AdminController } from './../controllers/admin.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [],
})
export class AdminModule {}
