import { Test, TestingModule } from '@nestjs/testing';
import { UpdateCatController } from './update-cat.controller';

describe('UpdateCatController', () => {
  let controller: UpdateCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateCatController],
    }).compile();

    controller = module.get<UpdateCatController>(UpdateCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
