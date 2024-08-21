import { Test, TestingModule } from '@nestjs/testing';
import { PaginateCatsController } from './paginate-cats.controller';

describe('PaginateCatsController', () => {
  let controller: PaginateCatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaginateCatsController],
    }).compile();

    controller = module.get<PaginateCatsController>(PaginateCatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
