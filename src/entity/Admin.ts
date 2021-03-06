// import 'reflect-metadata';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn, ObjectID, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "admin" })
export class Admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    userName: string;
}
