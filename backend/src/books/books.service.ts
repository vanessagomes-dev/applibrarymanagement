/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  create(book: Partial<Book>) {
    const newBook = this.bookRepository.create(book);
    return this.bookRepository.save(newBook);
  }

  findAll() {
    return this.bookRepository.find({ relations: ['author'] });
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id }, relations: ['author'] });
  }

  update(id: number, updateData: Partial<Book>) {
    return this.bookRepository.update(id, updateData);
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}
