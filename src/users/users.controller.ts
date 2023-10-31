import { Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { UserDto } from 'src/dto/user.dto';

@Controller('users')
export class UsersController {
constructor(
  private readonly usersService: UsersService
) {}

  @Get()
  GetAllUser(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  OneUser(@Param('id') id: number): Promise<User>{
    return this.usersService.findOne(id)

  }
  
  @Post()
  CreateUser(@Body() UserData: UserDto){
    return this.usersService.CreateUser(UserData)
  }

  @Delete(':id')
  DeleteUser(@Param('id') id: number) {
    return this.usersService.DeleteUser(id)
  }
}