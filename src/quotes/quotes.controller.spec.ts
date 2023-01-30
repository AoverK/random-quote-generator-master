import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { Quote } from '../quotes/entities/quote.entity';

const oneQuote = new Quote(0, 'Hello', 'Jim');
const quoteArray = [
  new Quote(1, 'I like beets', 'Dwight'),
  new Quote(2, 'I love cats', 'Angela'),
];

describe('QuotesController Tests', () => {
  let controller: QuotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [
        {
          provide: QuotesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(quoteArray),
            findOne: jest.fn().mockImplementation(() => oneQuote),
            findOneRandom: jest.fn().mockImplementation(() => oneQuote),
            update: jest.fn().mockResolvedValue(true),
            remove: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    controller = module.get<QuotesController>(QuotesController);
  });

  it('QuotesController should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('QuotesController findAll: should return an array of quotes', async () => {
    expect(await controller.findAll()).toContainEqual({
      quote_id: '1',
      quote: 'I like beets',
      character: 'Dwight',
    });
  });

  it('QuotesController findOne: should return one generated random quote', async () => {
    expect(await controller.findOne(0)).toEqual(oneQuote);
  });

  it('QuotesController findOneRandom: should return one generated random quote', async () => {
    expect(await controller.findOneRandom()).toEqual(oneQuote);
  });

  it('QuotesController update: should update a quote with a specific id', async () => {
    expect(await controller.update(0, oneQuote)).toEqual(true);
  });

  it('QuotesController remove: should delete a quote with a specific id', async () => {
    expect(await controller.remove(0)).toEqual(true);
  });
});
