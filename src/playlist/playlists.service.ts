import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Repository } from 'typeorm';
import { Song } from 'src/songs/song.entity';
import { User } from 'src/users/users.entity';
import { CreatePlaylistDto } from './dto/create-playlist.dto';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playListRepo: Repository<Playlist>,

    @InjectRepository(Song)
    private songRepo: Repository<Song>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(playListDTO: CreatePlaylistDto): Promise<Playlist> {
    const playlist = new Playlist();
    playlist.name = playListDTO.name;
    const songs = await this.songRepo.findByIds(playListDTO.songs);
    playlist.songs = songs;
    const user = await this.userRepo.findOneBy({ id: playListDTO.user });
    playlist.user = user;
    return this.playListRepo.save(playlist);
  }
}
