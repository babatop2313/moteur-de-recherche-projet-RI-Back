import { Test, TestingModule } from '@nestjs/testing';
import { InteretController } from './interet.controller';
import { InteretService } from './interet.service';

describe('InteretController', () => {
  let controller: InteretController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InteretController],
      providers: [InteretService],
    }).compile();

    controller = module.get<InteretController>(InteretController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
