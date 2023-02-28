import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  create(@Body() user: CreateUserDto): Promise<CreateUserDto>{
    return this.authService.register(user);
  }

  @Post('login')
  login(@Body() user: CreateUserDto): Promise<CreateAuthDto>{
    return this.authService.login(user);
  }  
}
