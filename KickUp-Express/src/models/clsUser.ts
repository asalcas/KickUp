import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { clsRole } from "./clsRole.js";

@Entity("users")
export class clsUsers {
    @PrimaryGeneratedColumn()
    id_user!: number;

    @Column("email")
    email!: String;

    @Column("password")
    hashPass!: String;

    @ManyToOne(() => clsRole)
    @JoinColumn({ name: "id_role" })
    role!: clsRole;


    constructor(id: number, mail: string, pass: string, role: clsRole) {
        this.id_user = id;
        this.email = mail;
        this.hashPass = pass;
        this.role = role;
    }
}