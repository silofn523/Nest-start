import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config' // 별도로 컨피그 모듈을 yarn에서 깔아야한다
import config from './configuration' // config 파일을 변수값으로 불러온다 (대괄호 뺌)

@Module({
  imports: [
    ConfigModule.forRoot({ // forRoot 주로 외부 모듈을 가져오고 구성할 때 사용
      envFilePath: '.env', // env 파일의 위치
      isGlobal: true, // 이 옵션을 사용하면 모듈이 애플리케이션 전체에 대해 전역적으로 공유됩니다.
      load: [config] // 컨피그 파일을 변수로 가져와서 배열에 넣는다 
    })
  ]
})
export class ConfigurationModule {}