import { Repository } from 'typeorm';
import { Book } from './book.entity';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    create(book: Partial<Book>): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book>;
    update(id: number, updateData: Partial<Book>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
