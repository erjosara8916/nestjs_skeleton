import { Test, TestingModule } from '@nestjs/testing';
import { CreateCatController } from './create-cat.controller';

describe('CreateCatController', () => {
  let controller: CreateCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCatController],
    }).compile();

    controller = module.get<CreateCatController>(CreateCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
