import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn('increment')
  quote_id: number;

  @Column()
  quote: string;

  @Column()
  character: string;

  constructor(quote_id: number, quote: string, character: string);
  constructor(quote_id?: number, quote?: string, character?: string) {
    this.quote_id = quote_id;
    this.quote = quote || '';
    this.character = character || '';
  }
}
