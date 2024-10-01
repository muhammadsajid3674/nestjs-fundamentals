import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';
import { Song } from './song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSongDto } from './dto/update-songe-dto';

@Controller({ path: 'songs', scope: Scope.REQUEST })
export class SongsController {
  constructor(
    private songService: SongsService,
    // @Inject('CONNECTION')
    // private connection: Connection,
  ) {
    // console.log('connection', this.connection.CONNECTION_STRING);
  }
  @Post()
  create(@Body() createSongDto: CreateSongDto): Promise<Song> {
    return this.songService.create(createSongDto);
  }
  @Get()
  findAll(): Promise<Song[]> {
    try {
      return this.songService.findAll();
    } catch (error) {
      throw new HttpException(
        'Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<Song> {
    // return `fetch song on the based on id ${typeof id}`;
    return this.songService.findById(id);
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSongDto: UpdateSongDto,
  ): Promise<UpdateResult> {
    // return 'update song on the base on id';
    return this.songService.update(id, updateSongDto);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    // return 'delete song on the base on id';
    return this.songService.removeById(id);
  }
}
