import { Entity } from "@mikro-orm/core";
import { UserEntity } from "../../../modules/user/entities/user.entity";

@Entity({ tableName: "SuperAdmins" })
export class SuperAdminEntity extends UserEntity {}
