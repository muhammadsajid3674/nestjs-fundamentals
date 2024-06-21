import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array
  private readonly songs = [];

  create(song) {
    // Save the songs in DB
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    // Fetch Songs from DB
    return this.songs;
  }
}
