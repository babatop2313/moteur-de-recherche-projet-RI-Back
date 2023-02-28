import { Module } from '@nestjs/common';
import { InteretService } from './interet.service';
import { InteretController } from './interet.controller';

@Module({
  controllers: [InteretController],
  providers: [InteretService]
})
export class InteretModule {}
