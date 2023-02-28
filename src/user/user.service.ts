import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userModelName } from './user.model-name';

@Injectable()
export class UserService {
  constructor(@InjectModel(userModelName) private model : Model<CreateUserDto>){}
  create(createUserDto: CreateUserDto) {
    return this.model.create(createUserDto);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
   if(isValidObjectId(id)){
    return this.model.findOne({_id : id});
   }
   throw new NotFoundException();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    if(isValidObjectId(id)){
      return this.model.findByIdAndUpdate({_id : id}, updateUserDto, {new : true});
    }
    throw new NotFoundException();
  }

  remove(id: string) {
    if(isValidObjectId(id)){
      return this.model.deleteOne({_id : id});
    }
    throw new NotFoundException();
  }


  findUser(email:  String) {
    return this.model.findOne({email : email});
  }
  async findUserOrFail(email:  String) {
    const found = await this.findUser(email);
    if(!found){
      throw  new NotFoundException();
    }
    return found;
  }
}
