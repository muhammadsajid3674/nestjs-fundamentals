import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
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
