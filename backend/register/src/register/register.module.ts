import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { MongooseModule } from '@nestjs/mongoose'
import { RegisterSchema } from './register.model';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Register",
        schema: RegisterSchema

      }
   
    ]),
    MailModule
  
],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
