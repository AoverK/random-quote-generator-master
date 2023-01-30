import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Quote } from './quotes/entities/quote.entity';
import { QuotesModule } from './quotes/quotes.module';

// NOTE: Synchronize being set to 'true' is only for Dev environments and not Production
const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: '../db',
  entities: [Quote],
  synchronize: true,
};

@Module({
  imports: [QuotesModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
