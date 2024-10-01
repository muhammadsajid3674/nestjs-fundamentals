import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './song.entity';
import { CreateSongDto } from './dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSongDto } from './dto/update-songe-dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  create(songDTO: CreateSongDto): Promise<Song> {
    console.log('🚀 ~ SongsService ~ create ~ songDTO:', songDTO);
    const song = new Song();
    song.title = songDTO.title;
    song.artists = songDTO.artists;
    song.duration = songDTO.duration;
    song.releasedDate = songDTO.releasedDate;
    song.lyrics = songDTO.lyrics;
    return this.songsRepository.save(song);
  }

  findAll(): Promise<Song[]> {
    return this.songsRepository.find();
  }

  findById(id: number): Promise<Song> {
    return this.songsRepository.findOneBy({ id });
  }
  removeById(id: number): Promise<DeleteResult> {
    return this.songsRepository.delete(id);
  }
   update(
    id: number,
    recordToUpdate: UpdateSongDto,
  ): Promise<UpdateResult> {
    return this.songsRepository.update(id, recordToUpdate);
  }
}
