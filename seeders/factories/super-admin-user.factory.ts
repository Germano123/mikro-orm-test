import { Factory, Faker } from "@mikro-orm/seeder";
import { ERoleType } from "../../src/constants/role-type.enum";
import { SuperAdminEntity } from "../../src/modules/user/entities/super-admin.entity";

export class SuperAdminFactory extends Factory<SuperAdminEntity> {
    model = SuperAdminEntity;

    protected definition(faker: Faker): Partial<SuperAdminEntity> {
        return {
            firstname: faker.name.fullName(),
            role: ERoleType.SUPERADMIN
        }
    }

}