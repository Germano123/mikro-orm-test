import { Factory, Faker } from "@mikro-orm/seeder";
import { ERoleType } from "../../src/constants/role-type.enum";
import { SchoolAdminEntity } from "../../src/modules/user/entities/school-admin.entity";

export class SchoolAdminFactory extends Factory<SchoolAdminEntity> {
    model = SchoolAdminEntity;

    protected definition(faker: Faker): Partial<SchoolAdminEntity> {
        return {
            firstname: faker.name.fullName(),
            role: ERoleType.SCHOOLADMIN
        }
    }

}