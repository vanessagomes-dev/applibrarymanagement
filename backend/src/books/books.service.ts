import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Author)
    private readonly bookRepository: Repository<Books>,
  ) {}

  findAll() {
    return this.bookRepository.find({ relations: ['books'] });
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id }, relations: ['books'] });
  }

  create(book: Partial<Book>) {
    const newAuthor = this.bookRepository.create(book);
    return this.bookRepository.save(newAuthor);
  }

  update(id: number, book: Partial<Book>) {
    return this.bookRepository.update(id, book);
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}
