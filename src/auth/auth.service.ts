import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  // validate(email: string, password: string){
  //     const user = this.userService.findByEmail(email);

  //     if(!user) return null;

  //     if(user.hashedPassword !== password) return null;

  //     const {hashedPassword, ...safeUser} = user;
  //     return safeUser;
  // }
}
