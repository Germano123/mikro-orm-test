import { Entity, OneToOne } from "@mikro-orm/core";
import { UserEntity } from "../../../modules/user/entities/user.entity";
import { SchoolEntity } from "../../school/entities/school.entity";

@Entity({ tableName: "SchoolAdmins" })
export class SchoolAdminEntity extends UserEntity {
    @OneToOne(() => SchoolEntity, school => school.adminstrator, { mapToPk: true })
    school: string;
}
