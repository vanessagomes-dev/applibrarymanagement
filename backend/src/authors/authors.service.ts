import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  findAll() {
    return this.authorRepository.find({ relations: ['books'] });
  }

  findOne(id: number) {
    return this.authorRepository.findOne({ where: { id }, relations: ['books'] });
  }

  create(author: Partial<Author>) {
    const newAuthor = this.authorRepository.create(author);
    return this.authorRepository.save(newAuthor);
  }

  update(id: number, author: Partial<Author>) {
    return this.authorRepository.update(id, author);
  }

  remove(id: number) {
    return this.authorRepository.delete(id);
  }
}
