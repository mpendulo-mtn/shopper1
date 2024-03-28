import { Test, TestingModule } from '@nestjs/testing';
import { Shopper1Controller } from '../../src/controller/shopper1.controller';
import { Shopper1Service } from '../../src/services/shopper1.service';

describe('Shopper1Controller', () => {
  let controller: Shopper1Controller;
  let service: Shopper1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Shopper1Controller],
      providers: [Shopper1Service],
    }).compile();

    controller = module.get<Shopper1Controller>(Shopper1Controller);
    service = module.get<Shopper1Service>(Shopper1Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string from the service', () => {
      const mockResponse = 'Mock response from service';
      jest.spyOn(service, 'findAll').mockReturnValue(mockResponse);

      const result = controller.findAll();
      expect(result).toEqual(mockResponse);
    });
  });
});
