import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class AuthService {
  constructor (private readonly usersServices : UserService){}

  async register(user: CreateUserDto) {

    const saltOrRounds = 10;
    const password = user.password;
    user.password= await bcrypt.hash(password, saltOrRounds);
    return this.usersServices.create(user);
  }
  
   async login(us: CreateUserDto) : Promise<CreateAuthDto>{
  
   let user = new CreateUserDto();
     user = await this.usersServices.findUserOrFail(us.email);
    const isMatch = await bcrypt.compare(us.password, user.password);
    if(!isMatch){
      throw new NotFoundException();
    }
   
    user.password = '';
    
    const token = jwt.sign({data : user}, 'secret', {expiresIn: '1h'});
    return {user, token};
  }
  
    async IsvalidToken(token : string) :Promise<boolean>{
      return new Promise((resolve, reject) =>{
        jwt.verify(token, 'secret', (error, data)=>{
          if(error){
            resolve(false)
          }else{
            resolve(true)
          }
        }
        );
      });
      }
}
