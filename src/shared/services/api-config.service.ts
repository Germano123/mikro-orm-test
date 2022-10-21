import { Options } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";
import * as dotenv from "dotenv";
import * as path from "path";

@Injectable()
export class ApiConfigService {
    constructor() {
        const nodeEnv = this.nodeEnv;

        dotenv.config({
            path: `.${ nodeEnv }.env`,
        });

        console.info(`Using ${ nodeEnv } environment.`);
    }

    get(key: string) {
        if (process.env[key])
            return process.env[key];
        return null;
    }

    public getString(key: string): string {
        return (this.get(key)) ? String(this.get(key)) : null;
    }

    public getNumber(key: string): number {
        return (this.get(key)) ? Number(this.get(key)) : null;
    }

    public getBoolean(key: string): boolean {
        return (this.get(key)) ? Boolean(this.get(key)) : null;
    }

    get nodeEnv(): string {
        return this.getString("NODE_ENV") || this.getString("ENVIRONMENT") || "local";
    }

    get appConfig() {
        return {
            port: this.getNumber("PORT"),
        };
    }

    get authConfig() {
        return {
            secret: this.getString("JWT_SECRET"),
            expiration: this.getNumber("JWT_EXPIRATION_TIME"),
            refresSecret: this.getString("JWT_REFRESH_SECRET"),
            refreshExpiration: this.getNumber("JWT_REFRESH_EXPIRATION_TIME"),
        };
    }

    get documentation() {
        return {
            isEnabled: this.getBoolean("DOCUMENTATION_ENABLED"),
        };
    }

    get mikroConfig(): Options {
        return {
            port: this.getNumber("DB_PORT"),
            user: this.getString("DB_USER"),
            host: this.getString("DB_HOST"),
            type: "postgresql",
            dbName: this.getString("DB_NAME"),
            password: this.getString("DB_PASSWORD"),
            entities: ["./dist/**/*.entity.js"],
            entitiesTs: ["./src/**/*.entity.ts"],
            migrations: {
                path: path.resolve(__dirname, "..", "..", "migrations"),
            }
        }
    }
}
