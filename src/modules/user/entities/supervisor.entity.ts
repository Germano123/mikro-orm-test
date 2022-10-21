import { Collection, Entity, ManyToMany } from "@mikro-orm/core";
import { SchoolEntity } from "../../school/entities/school.entity";
import { UserEntity } from "./user.entity";

@Entity({ tableName: "Supervisors" })
export class SupervisorEntity extends UserEntity {
    @ManyToMany(() => SchoolEntity, school => school.supervisors)
    schools: Collection<SchoolEntity> = new Collection<SchoolEntity>(this);
}
