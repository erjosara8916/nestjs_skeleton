import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCatController } from './delete-cat.controller';

describe('DeleteCatController', () => {
  let controller: DeleteCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteCatController],
    }).compile();

    controller = module.get<DeleteCatController>(DeleteCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
