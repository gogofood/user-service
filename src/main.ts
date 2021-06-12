import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,Origin,Accept,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin',
    );
    next();
  });
  await app.listen(3000);
}
bootstrap();
