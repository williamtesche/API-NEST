import { Controller, Get, Post, Body, Delete, Param, Put  } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

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

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<void> {
      return this.usersService.deleteUser(id);
    }
    @Put('update')
  async updateUser(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(updateUserDto);
  }
}