import { Injectable } from '@nestjs/common';
import { CreateInteretDto } from './dto/create-interet.dto';
import { UpdateInteretDto } from './dto/update-interet.dto';

@Injectable()
export class InteretService {
  create(createInteretDto: CreateInteretDto) {
    return 'This action adds a new interet';
  }

  findAll() {
    return `This action returns all interet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interet`;
  }

  update(id: number, updateInteretDto: UpdateInteretDto) {
    return `This action updates a #${id} interet`;
  }

  remove(id: number) {
    return `This action removes a #${id} interet`;
  }
}
