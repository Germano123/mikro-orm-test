import { Entity } from "@mikro-orm/core";
import { UserEntity } from "./user.entity";

@Entity({ tableName: "Users" })
export class CommonUserEntity extends UserEntity {}
