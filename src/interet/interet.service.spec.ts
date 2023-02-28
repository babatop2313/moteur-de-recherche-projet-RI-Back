import { Test, TestingModule } from '@nestjs/testing';
import { InteretService } from './interet.service';

describe('InteretService', () => {
  let service: InteretService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InteretService],
    }).compile();

    service = module.get<InteretService>(InteretService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
