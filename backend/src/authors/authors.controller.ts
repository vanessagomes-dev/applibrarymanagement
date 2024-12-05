/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() authorData) {
    return this.authorsService.create(authorData);
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.authorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateData) {
    return this.authorsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.authorsService.remove(id);
  }
}
