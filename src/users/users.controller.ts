import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')

export class UsersController {
    constructor (private usersService: UsersService) {}

    @Get()
    findAll(){
        return this. usersService.findAll();
    }

    @Post()
    create(@Body() user: CreateUserDto){
        return this. usersService.create(user);
    }
}