import { Repository } from 'typeorm';
import { Author } from './author.entity';
export declare class AuthorsService {
    private readonly authorRepository;
    constructor(authorRepository: Repository<Author>);
    create(author: Partial<Author>): Promise<Author>;
    findAll(): Promise<Author[]>;
    findOne(id: number): Promise<Author>;
    update(id: number, updateData: Partial<Author>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
