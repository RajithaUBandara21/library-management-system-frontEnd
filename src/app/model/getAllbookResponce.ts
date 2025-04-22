import { Book } from './book.model';

export interface BookResponse {
  code: number;
  messaage: string; 
  data: {
    books: Book[];
    itemCount: number;
  };
}