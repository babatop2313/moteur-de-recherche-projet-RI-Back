import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InteretModule } from './interet/interet.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
            MongooseModule.forRoot(process.env.MONGODB_URL),
            AuthModule, UserModule, InteretModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
