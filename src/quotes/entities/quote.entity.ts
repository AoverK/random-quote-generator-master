import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn('increment')
  quote_id: number;

  @Column()
  quote: string;

  @Column()
  character: string;
}
