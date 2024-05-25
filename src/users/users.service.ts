import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

global.users = [];


@Injectable()

export class UsersService {
    findAll() {
        return "Opa";
    }

    create (user: CreateUserDto){
        global.users.push(user);
    }

}