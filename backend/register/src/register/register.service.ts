import { Injectable } from '@nestjs/common';
import { RegisterModel } from './register.model';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'
import * as nodemailer from 'nodemailer'
import { MailService } from '../mail/mail.service';

interface User {
    password: string,
    email: string,
    firstName: string,
    middleName: string,
    lastName: string,
    contact: string,
    address: string,
    businessName: string,
    ifOthers: string,
    activationDate: string,
    timingSchedule: string,
    selectSolution: string,
    categoryOfService: string,
    referral: string 
}

@Injectable()
export class RegisterService {
    constructor(
      @InjectModel("Register") private registerModel: Model<RegisterModel>,
      private mailService: MailService
    ){}

    async register(user: User){
        const findUser = await this.registerModel.findOne({
          email: user.email
        })
        if(findUser){
          return {
            success: false,
            statusCode: 304,
            data: null,
            message: "User Already exists"
          }
        }
        const newUser = new this.registerModel({
            password: await bcrypt.hash(user.password, 10),
            email: user.email,
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
            contact: user.contact,
            address: user.address,
            businessName: user.businessName,
            ifOthers: user.ifOthers,
            activationDate: user.activationDate,
            timingSchedule: user.timingSchedule,
            selectSolution: user.selectSolution,
            categoryOfService: user.categoryOfService,
            referral: user.referral
        })
        try{
          const saveUser =  await newUser.save()
          if(saveUser){
            await this.mailService.sendUserRegistration(saveUser)
          }
          return {
            success: true,
            statusCode : 200,
            data: saveUser,
            message: "Registration was successful1"
          }
           
        }catch(error){
            console.log(error)
        }
    }
}
