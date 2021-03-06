import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity('BRANDS')
export class BrandOrm{
    @ObjectIdColumn()
    _id: ObjectID;
    @Column()
    reference: string;
    @Column()
    name: string;
}