import { DataSource } from "typeorm";
import { clsUsers } from "../models/clsUser.js";
import { clsRole } from "../models/clsRole.js";

const typeORM_dataSource = new DataSource({
    type: "mysql",
    host: process.env.db_host,
    port: 3306,
    username: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name,
    logging: true,
    synchronize: true,
    entities: [clsUsers, clsRole],
    subscribers: [],
    migrations: [],
})