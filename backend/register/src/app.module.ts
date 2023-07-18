import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { RegisterModule } from './register/register.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
      MongooseModule.forRoot(
        'mongodb+srv://soares:soares04@cluster0.kccbfpf.mongodb.net/RegisterDB?retryWrites=true&w=majority'
      ),
      RegisterModule,
      MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
