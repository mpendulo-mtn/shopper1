import { Module } from '@nestjs/common';

import { Shopper1Controller } from './controller/shopper1.controller';
import { Shopper1Service } from './services/shopper1.service';

@Module({
    controllers: [Shopper1Controller],
    providers: [Shopper1Service]
})
export class Shopper1Module {}