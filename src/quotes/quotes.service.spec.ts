import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quote } from '../quotes/entities/quote.entity';
import { QuotesService } from './quotes.service';

const quoteArray = [
  new Quote('1', 'I like beets', 'Dwight'),
  new Quote('2', 'I love cats', 'Angela'),
];

describe('QuotesService', () => {
  let service: QuotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuotesService,
        {
          provide: getRepositoryToken(Quote),
          useValue: {
            findAll: jest.fn().mockResolvedValue(quoteArray),
            findOne: jest.fn().mockReturnValue((quote_id: string) => [
              {
                quote_id: quote_id,
                quote: 'Hello',
                character: 'Jim',
              },
            ]),
            findOneRandom: jest.fn().mockReturnValue((quote_id: string) => [
              {
                quote_id: quote_id,
                quote: 'Hello',
                character: 'Jim',
              },
            ]),
            update: jest.fn().mockResolvedValue(true),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    service = module.get<QuotesService>(QuotesService);
  });

  it('QuotesService should be defined', () => {
    expect(service).toBeDefined();
  });
});
