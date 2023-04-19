import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entity/user.entity';
import { DeleteResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get('id')
  getById(@Param('id') id: number): Promise<User> {
    return this.userService.getById(id);
  }

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.addUser(createUserDto);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<DeleteResult> {

    return this.userService.deleteUser(id);
  }
  @Patch(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.userUpdate(id, updateUserDto);
  }
}
