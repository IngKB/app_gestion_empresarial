import {IPerson} from "../contracts/person.interface";
import {ObjectID} from "typeorm";

export class Provider implements IPerson{

    public _id: ObjectID;
    public company: string;
    public email: string;
    public identification: string;
    public name: string;
    public street: string;
    public telephone: string;
}