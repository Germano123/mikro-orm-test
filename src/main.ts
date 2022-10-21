import { MikroORM } from '@mikro-orm/core';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const mikroORM = app.get(MikroORM);
  await mikroORM.getMigrator().up();

  await app.listen(3000);
}
bootstrap();
