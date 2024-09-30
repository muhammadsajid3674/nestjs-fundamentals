import { Song } from 'src/songs/song.entity';
import { User } from 'src/users/users.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('playlist')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Song, (song) => song.playList)
  songs: Song[];
  @OneToMany(() => User, (user) => user.playLists)
  user: User;
}
