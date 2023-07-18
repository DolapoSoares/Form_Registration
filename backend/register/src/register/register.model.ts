import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose"
import {Document} from "mongoose"


export type RegisterModel = Register & Document;

@Schema()
export class Register {

    @Prop({unique: true})
    password: String;

    @Prop({unique : true})
    email: String;

    @Prop()
    firstName: String;

    @Prop()
    middleName: String;

    @Prop()
    lastName: String;

    @Prop()
    contact: String;

    @Prop()
    address: String;

    @Prop()
    businessName: String;

    @Prop()
    ifOthers: String;

    @Prop()
    activationDate: String;

    @Prop()
    timingSchedule: String;

    @Prop()
    selectSolution: String;

    @Prop()
    categoryOfService: String;

    @Prop()
    referral: String;
}


export const RegisterSchema = SchemaFactory.createForClass(Register);