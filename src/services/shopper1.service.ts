import { Injectable } from '@nestjs/common';

@Injectable()
export class Shopper1Service {
    findAll(): string {
        return 'Hello from shopper1 service';
    }
}