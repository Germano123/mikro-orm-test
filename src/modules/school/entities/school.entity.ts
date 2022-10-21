import { Collection, Entity, ManyToMany, OneToOne, Property } from "@mikro-orm/core";
import { SchoolAdminEntity } from "../../user/entities/school-admin.entity";
import { AbstractEntity } from "../../../common/abstract.entity";
import { SupervisorEntity } from "../../user/entities/supervisor.entity";

@Entity({ tableName: "Schools" })
export class SchoolEntity extends AbstractEntity {
    @Property()
    name: string;

    @OneToOne(() => SchoolAdminEntity, adminstrator => adminstrator.school, { owner: true, mapToPk: true })
    adminstrator: SchoolAdminEntity;

    @ManyToMany({ entity: () => SupervisorEntity })
    supervisors: Collection<SupervisorEntity> = new Collection<SupervisorEntity>(this);
}
