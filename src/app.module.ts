import { DepartmentModule } from './modules/department.module';
import { RoleModule } from './modules/role.module';
import { BookModule } from './modules/book.module';
import { AdminModule } from './modules/admin.module';
import { StudentModule } from './modules/student.module';
import { UserModule } from './modules/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AdminModule,
    BookModule,
    StudentModule,
    UserModule,
    DepartmentModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
