import { NestFactory } from '@nestjs/core';

import { Shopper1Module } from './shopper1.module';

const bootstrap = async () => {
    const app = await NestFactory.create(Shopper1Module);
    await app.listen(3000);
}

bootstrap();