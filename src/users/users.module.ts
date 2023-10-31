import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm'; // ORM의 역할이 테이블에 값 저장할 때 js문법으로 할 수 있게 하는거니깐

@Module({
  imports: [TypeOrmModule.forFeature([User])], //typeorm모듈에 User 엔티티를 가져와서 UserEntity 형식 대로 DB테이블에 적용 시키겠다는거
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}