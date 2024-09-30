import {
  MiddlewareConsumer,
  Module,
  NestModule,
  // RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
// import { DevConfigService } from './common/providers/DevConfigService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './songs/song.entity';
import { Artist } from './artists/artists.entity';
import { User } from './users/users.entity';
import { Playlist } from './playlist/playlist.entity';
import { PlaylistModule } from './playlist/playlists.module';
// import { DataSource } from 'typeorm';

// const devConfig = { port: 3000 };
// const prodConfig = { port: 8080 };

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'spotify-clone',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      synchronize: true,
      entities: [Song, Artist, User, Playlist],
    }),
    SongsModule,
    PlaylistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  // imports: [SongsModule],
  // controllers: [AppController],
  // providers: [
  //   AppService,
  //   {
  //     provide: DevConfigService,
  //     useClass: DevConfigService,
  //   },
  //   {
  //     provide: 'CONFIG',
  //     useFactory: () => {
  //       return process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
  //     },
  //   },
  // ],
})
export class AppModule implements NestModule {
  constructor(/*private dataSource: DataSource */) {
    // console.log('dbName', dataSource.driver.database);
  }
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs');

    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'songs', method: RequestMethod.POST });

    consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
