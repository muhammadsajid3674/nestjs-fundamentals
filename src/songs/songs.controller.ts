import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create() {
    return this.songService.create('Animal By Martin Garrix');
  }
  @Get()
  findAll() {
    return this.songService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'find single song';
  }
  @Put(':id')
  update() {
    return 'update song on the base on id';
  }
  @Delete(':id')
  delete() {
    return 'delete song on the base on id';
  }
}
