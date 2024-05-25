import { Body,Post,Controller, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';


@Controller('users')

export class UsersController {
    constructor (private usersService: UsersService) {}

    @Get('list')
    findAll(){
        return this. usersService.findAll();
    }

    @Post()
    create(@Body() user: CreateUserDto){
        return this. usersService.create(user);
    }

}