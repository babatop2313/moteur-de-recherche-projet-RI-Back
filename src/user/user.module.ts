import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userSchema } from './user.schema';
import { userModelName } from './user.model-name';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports :  [ MongooseModule.forFeature([{schema : userSchema, name : userModelName}]), forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService],
  exports : [UserService]
})
export class UserModule {}
