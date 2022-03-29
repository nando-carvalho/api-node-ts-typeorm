import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: [Post, Category],
    subscribers: [],
    migrations: ["./migrations/*.ts"],
    cli: {
        "migrationsDir": "./src/database/migrations/"
    }
})
