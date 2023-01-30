import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote) private quotesRepository: Repository<Quote>,
  ) {}
  create(createQuoteDto: CreateQuoteDto) {
    const newQuote = this.quotesRepository.create(createQuoteDto);
    return this.quotesRepository.save(newQuote);
  }

  findAll() {
    return this.quotesRepository.find();
  }

  async findOne(quote_id: number) {
    const quoteQueryResult = this.quotesRepository.findOne({
      where: {
        quote_id: quote_id,
      },
    });
    return await quoteQueryResult;
  }

  async findOneRandom() {
    const quoteCountResolved = await this.quotesRepository.count();
    const resultRandomId = Math.floor(Math.random() * quoteCountResolved);
    const quoteQueryResult = this.quotesRepository.find({
      skip: resultRandomId,
      take: 1,
    });
    const randomQuoteItem = await quoteQueryResult;

    return randomQuoteItem[0];
  }

  async update(
    quote_id: number,
    updateQuoteDto: UpdateQuoteDto,
  ): Promise<Quote> {
    const quoteQueryResultResolved = await this.quotesRepository.findOneBy({
      quote_id: quote_id,
    });
    quoteQueryResultResolved.quote = updateQuoteDto.quote;
    quoteQueryResultResolved.character = updateQuoteDto.character;
    return this.quotesRepository.save(quoteQueryResultResolved);
  }

  remove(quote_id: number) {
    return this.quotesRepository.delete(quote_id);
  }
}
