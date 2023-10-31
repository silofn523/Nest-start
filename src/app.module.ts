import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/configuration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({ // TypeOrmModule 모듈을 가져오는데 forRootAsync는 함수같은 느낌이다 
    imports: [ConfigModule], // env파일과 컨피그 파일을 쓸수있게 불러오는 모듈
    inject: [ConfigService], // ConfigService 를 불러오는 이유는 env파일과 컨피그 파일에 작성한 것들을 불러와서 쓴다 이런 느낌임 
    useFactory: (configService: ConfigService) => ({ // 컨피그 서버로 타입을 지정해주면 깔끔하다 
      type: "mysql",
      host: configService.get('DATABASE_HOST'),
      port: configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_SCHEMA'),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: configService.get<boolean>('TYPEORM_SYBCHRONIZE') // env 파일에 작성한 내용을 불린 타입으로 가져옴 
    })
  }),
    ConfigurationModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
