import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Register } from '../register/register.model';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

    async sendUserConfirmation(user: Register, token: string) {
        const url = `example.com/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email as string,
            // from: '"Support Team" <support@example.com>', //👈🏻 change this if you want to custome the mail from
            subject: 'Welcome to the subscription registration! Confirm your Email',
            template: './confirmation', // `.hbs` extension is appended automatically to select the template you'll want to use to send email
            context: { // 👈🏻 change this to have all content neded for your hbs
                name: user.firstName,
                url,
            },
        });
    }

    async sendUserRegistration(user: Register) {

        await this.mailerService.sendMail({
            to: user.email as string,
            from: '"Support Team" <onculturetest@gmail.com>', //👈🏻 change this if you want to custome the mail from
            subject: 'Welcome to the subscription registration!',
            template: './confirmation', // `.hbs` extension is appended automatically to select the template you'll want to use to send email
            context: { // 👈🏻 change this to have all content neded for your hbs
                emailID: user.email,
                password: user.password,
                categoryOfService: user.categoryOfService,
                date: user.activationDate
               
            },
        });

        await this.mailerService.sendMail({
            to: "dolaposoares04@gmail.com",
            from: '"Support Team" <onculturetest@gmail.com>', //👈🏻 change this if you want to custome the mail from
            subject: 'Welcome to the subscription registration!',
            template: './confirmation', // `.hbs` extension is appended automatically to select the template you'll want to use to send email
            context: { // 👈🏻 change this to have all content neded for your hbs
                emailID: user.email,
                password: user.password,
                categoryOfService: user.categoryOfService,
                date: user.activationDate
               
            },
        });

    }
}
