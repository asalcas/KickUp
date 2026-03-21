import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity("role")
export class clsRole {

    @PrimaryGeneratedColumn()
    id_role!: Number;

    @Column("name")
    role_name!: String;
}