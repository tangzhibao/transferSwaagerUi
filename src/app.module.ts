import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockModule } from './mock/mock.module';

@Module({
  imports: [MockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
