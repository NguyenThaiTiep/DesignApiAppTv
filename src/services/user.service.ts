import { Injectable } from '@nestjs/common';
import { UserTitleDto } from '../dto/user/user.dto';

@Injectable()
export class UserService {
  getAll() {
    return [new UserTitleDto()];
  }
}
