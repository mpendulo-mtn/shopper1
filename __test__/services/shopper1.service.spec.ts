import { Test, TestingModule } from '@nestjs/testing';
import { Shopper1Service } from '../../src/services/shopper1.service';

describe('Shopper1Service', () => {
  let service: Shopper1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Shopper1Service],
    }).compile();

    service = module.get<Shopper1Service>(Shopper1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string', () => {
      const result = service.findAll();
      expect(result).toEqual(expect.any(String));
    });

    it('should return a greeting message', () => {
      const result = service.findAll();
      expect(result).toEqual('Hello from shopper1 service');
    });
  });
});
