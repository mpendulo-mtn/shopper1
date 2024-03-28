import { Controller, Get, Inject } from '@nestjs/common';

import { Shopper1Service } from '../services/shopper1.service';

@Controller('shopper1')
export class Shopper1Controller {
    @Inject(Shopper1Service)
    private readonly shopper1Service: Shopper1Service;

    constructor(shopper1Service: Shopper1Service) {
        this.shopper1Service = shopper1Service;
    }

    @Get()
    findAll(): string {
        return this.shopper1Service.findAll();
    }
}