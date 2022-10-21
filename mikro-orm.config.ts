import { Options } from "@mikro-orm/core";
import * as path from "path";
import * as dotenv from "dotenv";

const nodeEnv = process.env["NODE_ENV"] || process.env["ENVIRONMENT"] || "local";
dotenv.config({
    path: `.${ nodeEnv }.env`,
});
console.info(`Using ${ nodeEnv } environment.`);

const mikroOrmConfig: Options = {
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    type: "postgresql",
    dbName: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: ["./dist/**/*.entity.js"],
    entitiesTs: ["./src/**/*.entity.ts"],
    migrations: {
        path: path.resolve(__dirname, "src/migrations"),
    }
}

export default mikroOrmConfig;