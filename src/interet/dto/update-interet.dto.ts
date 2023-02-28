import { PartialType } from '@nestjs/mapped-types';
import { CreateInteretDto } from './create-interet.dto';

export class UpdateInteretDto extends PartialType(CreateInteretDto) {}
