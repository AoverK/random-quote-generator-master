import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController Test', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('API root', () => {
    it('appController should be defined', () => {
      expect(appController).toBeDefined();
    });

    it('appController should return "Welcome to Random Quotes Generator"', () => {
      expect(appController.getRandomQuotes()).toBe(
        'Welcome to Random Quotes Generator',
      );
    });
  });
});
