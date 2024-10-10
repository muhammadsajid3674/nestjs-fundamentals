import { Artist } from 'src/artists/artists.entity';
import { Playlist } from 'src/playlist/playlist.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column('date')
  releasedDate: Date;

  @Column('time')
  duration: Date;
  @Column()
  lyrics: string;
  
  @ManyToMany(() => Artist, (artist) => artist.songs, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  artists: Artist[];

  @ManyToOne(() => Playlist, (playlist) => playlist.songs)
  playList: Playlist;
}
