import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InteretService } from './interet.service';
import { CreateInteretDto } from './dto/create-interet.dto';
import { UpdateInteretDto } from './dto/update-interet.dto';

@Controller('interet')
export class InteretController {
  constructor(private readonly interetService: InteretService) {}

  @Post()
  create(@Body() createInteretDto: CreateInteretDto) {
    return this.interetService.create(createInteretDto);
  }

  @Get()
  findAll() {
    return this.interetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInteretDto: UpdateInteretDto) {
    return this.interetService.update(+id, updateInteretDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interetService.remove(+id);
  }
}
