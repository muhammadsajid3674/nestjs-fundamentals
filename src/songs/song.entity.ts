import { Artist } from 'src/artists/artists.entity';
import { Playlist } from 'src/playlist/playlist.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  date: Date;
  @Column()
  lyrics: string;

  @OneToMany(() => Artist, (artist) => artist.songs, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  artists: Artist;

  @ManyToOne(() => Playlist, (playlist) => playlist.songs)
  playList: Playlist;
}
