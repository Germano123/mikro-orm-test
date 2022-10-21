import { Entity, Property, Enum } from "@mikro-orm/core";
import { AbstractEntity } from "../../../common/abstract.entity";
import { ERoleType } from "../../../constants/role-type.enum";

@Entity()
export abstract class UserEntity extends AbstractEntity {
    @Property({ nullable: false })
    firstname: string;

    @Property({ nullable: true })
    lastname: string;

    @Enum(() => ERoleType)
    role: ERoleType;
}